const  { verifyUser } =require( "../utils/authSession");
const {cookie}=require("cookie-parser")


async function restrictToLoggedInUser(req,res,next){
    const token=req.body.token;
    
        try {
           const userdata= verifyUser(token)
             //console.log(userdata,"inside the auth.js")
             req.data=userdata;

             next() 

        } catch (error) {
           console.log(error)
           return res.send("need to login once again")
        }
    
    }
    // }

module.exports={restrictToLoggedInUser}  