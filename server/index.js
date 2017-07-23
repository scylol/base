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

mongoose.connect(DATABASE_URL,function(err){
  if(err) console.log('Something wrong with mongoose connection');
  console.log('MLab connected!');
});


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

app.get('/api/me', passport.authenticate('bearer', {session: false}),(req, res) => {
  console.log(req.user);
  return res.json(req.user);
});

//Google Oath
passport.use(
    new GoogleStrategy({
      clientID:  secret.CLIENT_ID,
      clientSecret: secret.CLIENT_SECRET,
      callbackURL: '/api/auth/google/callback'
    },
    (accessToken, refreshToken, profile, cb) => {
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
function runServer(port=3001) {
  console.log(port);
  
  return new Promise((resolve, reject) => {
    server = app.listen(port, () => {
      resolve();
    }).on('error', reject);
  });
}

function closeServer() {
  return new Promise((resolve, reject) => {
    server.close(err => {
      if (err) {
        return reject(err);
      }
      resolve();
    });
  });
}


// function runServer(databaseUrl=DATABASE_URL, port=PORT) {
//   console.log(databaseUrl);
//   console.log(port);
//   return new Promise((resolve, reject) => {
//     mongoose.connect(databaseUrl, err => {
//       if (err) {
//         return reject(err);
//       }
//       server = app.listen(port, () => {
//         console.log(`Your app is listening on port ${port}`);
//         resolve();
//       })
//       .on('error', err => {
//         mongoose.disconnect();
//         reject(err);
//       });
//     });
//   });
// }

// function closeServer() {
//   return mongoose.disconnect().then(() => {
//     return new Promise((resolve, reject) => {
//       console.log('Closing server');
//       server.close(err => {
//         if (err) {
//           return reject(err);
//         }
//         resolve();
//       });
//     });
//   });
// }

if (require.main === module) {
  runServer();
}

module.exports = {
  app, runServer, closeServer
};


