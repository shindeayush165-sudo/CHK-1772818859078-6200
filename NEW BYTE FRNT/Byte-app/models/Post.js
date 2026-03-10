const mongoose = require("mongoose")

const PostSchema = new mongoose.Schema({

  user:{
    type:String,
    required:true,
    trim:true
  },

  content:{
    type:String,
    required:true,
    maxlength:500
  },

  image:{
    type:String,
    default:""
  },

  likes:{
    type:Number,
    default:0
  },

  comments:{
    type:Number,
    default:0
  },

  shares:{
    type:Number,
    default:0
  },

  createdAt:{
    type:Date,
    default:Date.now
  }

})

module.exports = mongoose.model("Post", PostSchema)