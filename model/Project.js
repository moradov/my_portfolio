const moongoos = require('mongoose');

const projectShema = moongoos.Schema({
  name: {
    type: String,
    require: true
  },
  description: {
    type: String
  },
  img_url: {
    type: String,
    require: true
  },
  used_tech: {
    type: Array,
    require: true
  },
  date: {
    type: String,
    require: true
  }
});
module.exports = moongoos.model('project', projectShema);
