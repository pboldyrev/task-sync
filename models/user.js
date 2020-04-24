var mongoose = require("mongoose");
var passportLocalMongoose = require("passport-local-mongoose");

var userSchema = new mongoose.Schema({
  username: String,
  password: String,
  owns:[{
    type: mongoose.Schema.Types.ObjectId,
    ref: "List"
  }],
  hasAccess:[{
    type: mongoose.Schema.Types.ObjectId,
    ref: "List"
  }]
});

userSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("User", userSchema);
