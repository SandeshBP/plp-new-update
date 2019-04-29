const mongoose = require("mongoose");

const postSchema = mongoose.Schema({
  postedBy: { type: String, required: true },
  post: { type: String, required: true },
  likes: { type: Number, required: true },
  dislikes: { type: Number, required: true },
  comments: { 
    commentedBy: { type: String, required: false },
    comment: { type: String, required: false },
  }
});
module.exports = mongoose.model("post", postSchema);
