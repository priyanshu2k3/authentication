const jwt=require("jsonwebtoken")


const secret ="ppg#@!98765"


function setUser(user){
    console.log(user,"inside setuser,getusr")

    console.log(jwt.sign(user,secret,{}))
 return (jwt.sign(user,secret))
}

function verifyUser(token){
    if(!token){return (null)}

    return(jwt.verify(token,secret));
}

module.exports={setUser,verifyUser}