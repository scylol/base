const path = require('path');
const express = require('express');
const firebase = require('firebase');
const bodyParser = require('body-parser');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const BearerStrategy = require('passport-http-bearer').Strategy;
const mongoose = require('mongoose');

require('dotenv').config();
const {DATABASE_URL, PORT} = process.env;
const {User} = require('./models');




let secret = {
  CLIENT_ID: process.env.CLIENT_ID,
  CLIENT_SECRET: process.env.CLIENT_SECRET
};

if(process.env.NODE_ENV != 'production') {
  secret = require('./secret');
}


const app = express();

app.use(passport.initialize());
app.use(bodyParser.json());

//database endpoints
app.get('/api/me', passport.authenticate('bearer', {session: false}),(req, res) => {
  console.log(req.user);
  return res.json(req.user);
});

app.put('/api/users/:googleId', passport.authenticate('bearer', {session: false}), (req, res) => {
  User
    .findOneAndUpdate({googleId: req.params.googleId}, 
    {$set:{ slider1:req.body.slider1, 
      slider2: req.body.slider2,
      slider3: req.body.slider3,
      slider4: req.body.slider4,
      slider5: req.body.slider5,
      slider6: req.body.slider6,
    }}
      , {new: true})
    .then(results => {
      console.log('result from put' + results);
      res.json(results).end();
    })
    .catch(err => {
      console.log(err);
      res.status(400).json({error: 'Put request fail'});
    });
});

//Google Oath
passport.use(
    new GoogleStrategy({
      clientID:  secret.CLIENT_ID,
      clientSecret: secret.CLIENT_SECRET,
      callbackURL: '/api/auth/google/callback'
    },
    (accessToken, refreshToken, profile, cb) => {
      console.log('profile',profile);
      User.findOne({googleId: profile.id}, function(err, user){
        console.log('inside passport', accessToken);
        if(!user) {
          console.log('inside if passport', accessToken);
          User.create({
            googleId: profile.id,
            name:profile.displayName,
            accessToken: accessToken
          }, function(err,user){
            return cb(null, user);
          });
        } else {
          User.findOneAndUpdate({googleId: profile.id}, {accessToken}, {new: true}, function(err, user){
            return cb(null, user);
          });
          
        }
      });
    }
));

passport.use(
    new BearerStrategy(
        (token, done) => {
          User.findOne({accessToken: token}, function(err, user){
            if(!user) {
              return done(null, false);
            }
            console.log('UserToken',user);
            return done(null, user);
          });
        }
    )
);

app.get('/api/auth/google',
    passport.authenticate('google', {scope: ['profile']}));

app.get('/api/auth/google/callback',
    passport.authenticate('google', {
      failureRedirect: '/',
      session: false
    }),
    (req, res) => {
      console.log('req.user', req.user);
      res.cookie('accessToken', req.user.accessToken, {expires: 0});
      res.redirect('/');
    }
);

app.get('/api/auth/logout', (req, res) => {
  req.logout();
  res.clearCookie('accessToken');
  res.redirect('/');
});

// Unhandled requests which aren't for the API should serve index.html so
// client-side routing using browserHistory can function

app.get(/^(?!\/api(\/|$))/, (req, res) => {
  const index = path.resolve(__dirname, '../client/build', 'index.html');
  res.sendFile(index);
});

let server;


function runServer(databaseUrl=DATABASE_URL, port=PORT) {
  console.log(databaseUrl);
  console.log(port);
  return new Promise((resolve, reject) => {
    mongoose.connect(databaseUrl, err => {
      if (err) {
        return reject(err);
      }
      server = app.listen(port, () => {
        console.log(`Your app is listening on port ${port}`);
        resolve();
      })
      .on('error', err => {
        mongoose.disconnect();
        reject(err);
      });
    });
  });
}

function closeServer() {
  return mongoose.disconnect().then(() => {
    return new Promise((resolve, reject) => {
      console.log('Closing server');
      server.close(err => {
        if (err) {
          return reject(err);
        }
        resolve();
      });
    });
  });
}

if (require.main === module) {
  runServer();
}

module.exports = {
  app,
  runServer,
  closeServer
};




