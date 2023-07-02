const express = require('express');
const mongoose = require ("mongoose")
const cors = require('cors');
const cookieParser=require('cookie-parser')
// const router = express.Router()
const app = express();


const signUpRouter=require("./routes/signup")




//mogodb connecting
mongoose.connect("mongodb://127.0.0.1:27017/bloodDonation")
.then(()=>{console.log("db is connected")})
.catch((e)=>console.log("error",e))


app.use(express.urlencoded({extended:false}))
app.use(express.json())
app.use(cors(withCredentials = true));
app.use(cookieParser())

app.use("/",signUpRouter) 





// app.get('/', (req, res) => {
//   return res.cookie("name","ppg").json("hello world").send("hell")
// });

//creating the user or sign up 


// app.delete('/', (req, res) => {
//   res.send("hello world")
// });

// app.update('/', (req, res) => {
//   res.send("hello world")
// });


const PORT =8000; // Set the port number
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
