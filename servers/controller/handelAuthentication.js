const User=require("../models/signup")
const { v4: uuidv4 } = require('uuid');
const{setUser,getUser}=require("../utils/authSession")
const {hashPassword}=require("../utils/hash.js")

async function handelUserSignUp(req,res){
    const data=req.body;
    if(!data.username||!data.email ||!data.password ){
        return res.status("all data must be filled ");}

    try {
        var result=await User.create(
          { username:data.username,
            email:data.email,
            hash:data.password,
               }
         );
         console.log("sucessfully created the user",result);
         return(res.status(200).send(result))
         } 
         catch (error) {
          console.log(error)
          return(res.status(400).send(error));
         }
    
}


async function handelUserLogin(req,res){

      var {email,password}=req.body;
       password=hashPassword(password)
      const user =await User.findOne({"email":email,"hash":password})
      console.log("server serching for user anf got this",user)

      if(!user){return(res.status(404).send("Invalid email or password or you are not registered "))}
      else {
        console.log("else part in the handel authentication")
      //const sessionId=uuidv4();
       const token=setUser(req.body)
      // console.log("token generated",token)

       res.cookie("token",token,{
        secure: false, // Serve cookie over HTTPS only
        maxAge:36000, // Cookie expiration time (in milliseconds)
      httpOnly: false, // Restrict cookie access to HTTP requests only
      
      sameSite: 'strict' // Restrict cookie to same-site requests only
        });

      return (res.status(200).send({"user":user,"token":token}))}  
        }

    
      


module.exports= {handelUserSignUp,handelUserLogin,};

