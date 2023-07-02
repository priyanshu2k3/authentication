import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';



function Login(props) {
  const navigate = useNavigate();

    const [Email, setEmail] = useState("");
    const [Password, setPassword] = useState();


    async function handelLogin(e){
      e.preventDefault();

      const vals=({ "email":Email,"password":Password});
      console.log(vals,"login.js frontend ")
      await axios.post('http://localhost:8000/login?',vals)
      .then(res => {console.log("response from signin ",res.data)
      const token= res.data.token
      console.log(token,"value inside the login .js ")
      // console.log(res.data.cookie)
                Cookies.set('token',token );
                    })


      .catch(error => {console.log("error",error);}) 
    }
    

    function handelOnchange(e){
        if(e.target.id==="email"){(setEmail(e.target.value))}
        if(e.target.id==="password"){(setPassword(e.target.value))}
    }

    return (
      
<section className="h-screen">
  <div className="h-full">
    {/* <!-- Left column container with background--> */}
    <div
      className="g-6 flex h-full flex-wrap items-center justify-center lg:justify-between">
      <div
        className="shrink-1 mb-12 grow-0 basis-auto md:mb-0 md:w-9/12 md:shrink-0 lg:w-6/12 xl:w-6/12">
        <img
          src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
          className="w-full"
          alt="Sample image" />
      </div>

      {/* <!-- Right column container --> */}
      <div className="mb-12 md:mb-0 md:w-8/12 lg:w-5/12 xl:w-5/12">
        <form>

        <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
    <form className="space-y-6" action="#">
        <h5 className="text-xl font-medium text-gray-900 dark:text-white">Sign in to our platform</h5>
        <div>
            <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" >Your email</label>
            <input onChange={handelOnchange} type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name@company.com" required/>
        </div>
        <div>
            <label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"  >Your password</label>
            <input onChange={handelOnchange} type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" />
        </div>
        <div className="flex items-start">
            <div className="flex items-start">
                <div className="flex items-center h-5">
                    <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required/>
                </div>
                <label for="remember" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
            </div>
            <a href="#" className="ml-auto text-sm text-blue-700 hover:underline dark:text-blue-500">Forgot Password?</a>
        </div>
        <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={handelLogin}>Login to your account</button>
        <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
            Not registered? <a href="signup" className="text-blue-700 hover:underline dark:text-blue-500 ">Create account</a>
        </div>
    </form>
</div>

        </form>
      </div>
    </div>
  </div>
</section>
    );
  }

export default Login;

