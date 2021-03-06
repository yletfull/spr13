const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    minlength: 2,
    maxlength: 30,
    required: true,
  },
  about: {
    type: String,
    minlength: 2,
    maxlength: 30,
    required: true,
  },
  avatar: {
    type: String,
    validate: {
      validator(v) {
        return /^(https?:\/{2})?(www\.)?(((([a-zA-Z0-9]+[-_.]?[a-zA-Z0-9]+|[a-z]{0,})+(?<=[a-z])\.[a-z]{2,10})(:([1-5][1-9]{4}|[6][0-5][0-5][0-3][0-5]|[1-9][0-9]{0,3}))?(\/[a-zA-Z0-9#.\/?_-]*\/?)*)|((([0-1][0-9]{2}|[2][0-5]{2}|[0-9]){0,2}(\.|:)){3}(([0-1][0-9]{2}|[2][0-5]{2}|[0-9]){0,2}(:([1-5][1-9]{4}|[6][0-5][0-5][0-3][0-5]|[1-9][0-9]{0,3}))?)(\/[a-zA-Z0-9#.\/?_-]+\/?)*)\/?#?)+$/.test(v);
      },
      message: (props) => `${props.value} is not a valid url!`,
    },
    required: true,
  },
}, { versionKey: false });

module.exports = mongoose.model('users', userSchema);
