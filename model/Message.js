const moongoos = require('mongoose');

const messageShema = moongoos.Schema({
  name: {
    type: String,
    require: true
  },
  email: {
    type: String
  },
  message: {
    type: String,
    require: true
  }
});
module.exports = moongoos.model('message', messageShema);
