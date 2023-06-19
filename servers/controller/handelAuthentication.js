const User=require("../models/signup")
const { v4: uuidv4 } = require('uuid');
const{setUser,getUser}=require("../utils/authSession")

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
    const {email,password}=req.body;
    if(email==="" && password===""){return res.status("all data must be filled ");}


    else{
      const user =await User.findOne({"email":email,"hash":password})
      if(!user){return(res.status(404).send("Invalid email or password or you are not registered "))}
      else {
      const sessionId=uuidv4();
      setUser(sessionId,user)
      console.log("found",sessionId)

      // res.cookie("uid",sessionId)

      // res.cookie("cookieSessionId",sessionId,{
      //  // maxAge:36000, // Cookie expiration time (in milliseconds)
      //   // httpOnly: false, // Restrict cookie access to HTTP requests only
      //   // secure: false, // Serve cookie over HTTPS only
      //   // sameSite: 'strict' // Restrict cookie to same-site requests only
      // });
      // console.log("logged in",user,"cookie",sessionId)
      //console.log("all cookies",res.cookie("uid"))
      
      return (res.status(200).cookie("cookieSessionId",sessionId).send(user))}  
      // res.status(200).redirect("/home")}
        }

    
      

    
}


module.exports= {handelUserSignUp,handelUserLogin};

