const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  googleId: {type: String, required: true},
  name: {type: String, required: true},
  accessToken: {type: String, required: true},
  image: {type: String}
});

userSchema.methods.apiRepr = function() {
  return {
    name: this.name
  };
};

const User = mongoose.model('User', userSchema);

module.exports = {User};