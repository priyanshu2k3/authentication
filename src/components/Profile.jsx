import React, { useState,useEffect,useContext } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import { AppContext } from '../context/context';


function Profile(props){
    const [Name, setName] = useState();
    const [Address, setAddress] = useState();
    const [Country, setCountry] = useState();
    const [State, setState] = useState();
    const [Pincode, setPincode] = useState();
    const [Phonenumber, setPhonenumber] = useState();
    const [Bloodgroup, setBloodgroup] = useState();
    const [Gender, setGender] = useState();
    const [Birthday, setBirthday] = useState();





    async function handelOnSubmit(){
        const cokie=document.cookie
        const cleanedCokie = cokie.replace('token=', '');

        const vals=({"name":Name,
                    "address":Address,
                    "country":Country,
                    "state":State,
                    "pincode":Pincode,
                    "phonenumber":Phonenumber,
                    "bloodgroup":Bloodgroup,
                    "gender":Gender,
                    "birthday":Birthday,
                    "token":cleanedCokie
                })
                    
        //console.log(vals)
        //console.log(document.cookie,"in the cookiee profile .js")
        try {
           
            await axios.post('http://localhost:8000/update',vals,{withCredential:true})
            .then(res => {console.log("response from server in the profile.js ",res.data)})
        } catch (error) {
            console.log(error,"axios in the profile.js")
        }
        return(null)
    }



    function handelOnchange(e){
        e.preventDefault()

        if(e.target.id==="name"){(setName(e.target.value))}
        if(e.target.id==="address"){(setAddress(e.target.value))}
        if(e.target.id==="country"){(setCountry(e.target.value))}
        if(e.target.id==="state"){(setState(e.target.value))}
        if(e.target.id==="pincode"){(setPincode(e.target.value))}
        if(e.target.id==="phone"){(setPhonenumber(e.target.value))}
        if(e.target.id==="bloodGroup"){(setBloodgroup(e.target.value))}
        if(e.target.id==="gender"){(setGender(e.target.value))}
        if(e.target.id==="birthday"){(setBirthday(e.target.value))}

        // console.log(Name,Address,Country,State,Pincode,Phonenumber,Bloodgroup,Gender,Birthday,"inside profile.js")
       return(null)
    }

     const name=useContext(AppContext)

    
    return (

<form>
    <label htmlFor=""><h1 className='text-white text-3xl p-5'>Eddit Profile</h1></label>
    <div className="grid gap-6 mb-6 md:grid-cols-2 ">

    <div >
        <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Enter your Name</label>
        <input  onChange={handelOnchange} type="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder={props.name} required/>
    </div> 
        <div>
            <label htmlFor="address" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Full Address</label>
            <input  onChange={handelOnchange} type="text" id="address" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="26/A rishi road " required/>
        </div>
        <div>
            <label htmlFor="country" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Country</label>
            <input  onChange={handelOnchange} type="text" id="country" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="India" required/>
        </div>
        <div>
            <label htmlFor="State" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">State</label>
            <input   onChange={handelOnchange} type="text" id="state" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Delhi" required/>
        </div>  
        <div>
            <label htmlFor="pincode" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Pincode</label>
            <input  onChange={handelOnchange} type="text" id="pincode" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="700059" required/>
        </div>
        <div>
            <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone number</label>
            <input  onChange={handelOnchange} type="tel" id="phone" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="123-45-678"  required/>
        </div>
        <div>
           
        <label htmlFor="Blood Group" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Blood Group</label>
            <select  onChange={handelOnchange} id="bloodGroup" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <option defaultValue>Select Blood Group</option>
                <option value="B cell">B cell</option>
                <option value="O">Type O</option>
                <option value="AB">Type AB</option>
                <option value="A">Type A</option>
                <option value="AB">AB positive</option>
                <option value="B">B Negative</option>
                <option value="O">O Negative</option>
                <option value="AB">AB negative</option>
                <option value="B">B Positive</option>
                <option value="O">O positive</option>
                <option value="ABO">ABO</option>
            </select>
        </div>
        <div>
           
           <label htmlFor="gender" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Gender</label>
               <select  onChange={handelOnchange} id="gender" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                   <option defaultValue>Select gender</option>
                   <option value="Male">Male</option>
                   <option value="Female">Female</option>
                   <option value="Others">Others</option>
               </select>
           </div>
        <div>
            <label htmlFor="date" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Date of birth</label>
            <input  onChange={handelOnchange}  type="tel" id="birthday" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="11-09-2001 (ddmmyyyy)" required/>
        </div>
    </div>
  
    
    <button onClick={handelOnSubmit} type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
</form>

    );
  }

export default Profile;

