const jwt = require("jsonwebtoken")

const isAdminAuthorized = (req,res,next) =>{
    const token=req.headers.authorization.split("").splice(7).join(' ');
    console.log(token);

    if(!token){
        return res.send("no data found")
    }
    
    jwt.verify(token, "vikrant" , (err,decoded)=>{
        if(err){
            return null
        }
        if(decoded.role == "admin"){
            next()
        }
        if(decoded.role !== "admin"){
            return res.send("not authorized")
        }
    })
}


module.exports = isAdminAuthorized;