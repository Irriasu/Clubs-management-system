const { default: mongoose } = require("mongoose")


const userSchema = new mongoose.Schema({
   
      name: {type:String,required:true},
      lastName: {type:String,required:true},
      email:{type:String,required:true},
      password:{type:String,required:true},
      token:{type:String,required:true},
      profile:{type:String,required:true},
      class:{type:String,required:true},
      admin:{type:Boolean,default:false},
})

module.exports = mongoose.model("User",userSchema)