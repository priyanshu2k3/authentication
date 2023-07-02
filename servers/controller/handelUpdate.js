const update=require("../models/update")
const{setUser,getUser}=require("../utils/authSession")
const User=require("../models/signup")
const Update=require("../models/update.js")


 async function handelUpdate(req,res){


    console.log("inside the handelUpdate", req.data )

    


    

    
    
    return( res.send("working"))
}


module.exports= {handelUpdate};