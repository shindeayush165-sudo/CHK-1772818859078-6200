const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema({

  username:{
    type:String,
    required:true,
    unique:true,
    trim:true,
    minlength:3,
    maxlength:20
  },

  email:{
    type:String,
    required:true,
    unique:true,
    lowercase:true
  },

  password:{
    type:String,
    required:true,
    minlength:6
  },

  bio:{
    type:String,
    default:""
  },

  skills:{
    type:[String],
    default:[]
  },

  profilePic:{
    type:String,
    default:"https://i.pravatar.cc/150"
  },

  followers:{
    type:[String],
    default:[]
  },

  following:{
    type:[String],
    default:[]
  },

  createdAt:{
    type:Date,
    default:Date.now
  }

})

module.exports = mongoose.model("User", UserSchema)