const mongoose= require("mongoose");


const userSchema= mongoose.Schema({
    user:{type:String,required:true},
    email:{type:String,required:true},
    password:{type:String,required:true},
    role:{type:String,required:true, default:"admin"}
})

userSchema.pre('save',async function (next){
    try{
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(this.password,salt)
        this.password= hashedPassword
        next()
    }catch(error){
        next(error)
    }
})

const user= mongoose.model("users",userSchema) 

module.exports = user;