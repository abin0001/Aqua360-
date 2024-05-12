// import React, { useState } from 'react';
// import { db } from "./../../config/firebaseConfig";

// function SignUp() {
//     const [formData, setFormData] = useState({
//         deviceid: '',
//         email: '',
//         name: '',
//         password: '',
//     });

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData({ ...formData, [name]: value });
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         console.log('Form submitted:', formData);
                
//         // Store form data in Firebase
//         try {
//             await db.collection('profileData').add(formData);
//             console.log('Data stored in Firestore successfully!');
//         } catch (error) {
//             console.error('Error storing data in Firestore:', error);
//         }
//     };

//     return (
//         <div className="container">
//             <h1>Sign Up</h1>
//             <form onSubmit={handleSubmit}>
//                 <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Name" />
//                 <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" />
//                 <input type="password" name="password" value={formData.password} onChange={handleChange} placeholder="Password" />
//                 <input type="text" name="deviceid" value={formData.deviceid} onChange={handleChange} placeholder="Device ID" />
//                 <button type="submit">Sign Up</button>
//             </form>
//         </div>
//     );
// }

// export default SignUp;

// import logo from './logo.svg';
import './../../App.css';
// import {Auth} from './components/auth';
import {db} from "./../../config/firebaseConfig";
import { useEffect, useState } from 'react';
import {getDocs,collection,addDoc} from "firebase/firestore";


function App() {

const[datalist,setDatalist] =useState([]);

const[deviceiddata,setNewdeviceiddata]=useState("");
const[emailiddata,setNewemailiddata]=useState("");
const[namedata,setNewnamedata]=useState("");
const[passworddata,setNewpassworddata]=useState("");



const dataCollectionRef=collection(db,"profileData");

useEffect(()=> {
    const getDataList = async()=>{
        try{
        const data = await getDocs(dataCollectionRef);
        console.log(data)
        }catch (err){
            console.error(err);
        }
    };

getDataList();

} ,[])


const onSubmitData = async() => {
    await addDoc(dataCollectionRef,{
        deviceid: deviceiddata,
        email:emailiddata,
        name:namedata,
        password:passworddata})
}


  return (
    <div className="App">
      {/* <Auth/> */}
      <input type="text" placeholder='enter your deviceid' onChange={ (e)=> setNewdeviceiddata(e.target.value)}/>
      <input type="text" placeholder='enter your email' onChange={ (e)=> setNewemailiddata(e.target.value)}/>
      <input type="text" placeholder='enter your name' onChange={ (e)=> setNewnamedata(e.target.value)}/>
      <input type="text" placeholder='enter your password' onChange={ (e)=> setNewpassworddata(e.target.value)}/>


      <button onClick={onSubmitData}>Submit</button>
    </div>

    // <retrive/>

  );
}

export default App;
