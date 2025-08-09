import React, { useState } from 'react'
import '../styles/Register.css'
import ApiService from '../services/ApiService'

const Register = () => {
    const [formData,setFormData]=useState(
        {
            email:'',
            password:'',
            firstName:'',
            lastName:'',
            roleName:''
        }
    );
    async function handleSubmit(event) {
        event.preventDefault();
        try{
            console.log(formData)
            const response= await ApiService.registerUser(formData);// Sends the form data to the backend and Waits for a response from the backend
            console.log("Registration Successful",response);
            alert("Registration successful!")
        }
        catch(error){
            console.log("Registration failed",error);
            alert("Error while registering. Please try again.");
        }
        }

    
  return (
    <div className='container'>
        <h1 style={{fontStyle:"italic"}}>Register Here!!</h1>
        <form onSubmit={handleSubmit}>
            <label>Email:</label><br/>
            <input 
            type="email" 
            name="email" 
            value={formData.email}
            onChange={(e)=>{setFormData({...formData,email:e.target.value})}}
            placeholder='Enter your email id' 
            required/>
            <br/><br/>
            <label>Password:</label><br/>
            <input 
            type="password" 
            name="password" 
            value={formData.password}
            onChange={(e)=>{setFormData({...formData,password:e.target.value})}}
            placeholder='Enter password' 
            required/>
            <br/><br/>
            <label>First Name:</label><br/>
            <input 
            type="text" 
            value={formData.firstName}
             name="firstName" 
             placeholder='Enter your first name'
             onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
              required/>
            <br/><br/>
            <label>Last Name:</label><br/>
            <input 
            type="text"  
            value={formData.lastName}
            name="lastName" 
            placeholder='Enter your last name'
            onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
             required/>
            <br/><br/>
            <label>Role:</label><br/>
            <select name="roleName"  value={formData.roleName}
            onChange={(e) => setFormData({ ...formData, roleName: e.target.value })}>
                <option value="">--Select Role--</option>
                <option value="ADMIN">ADMIN</option>
                <option value="HOD">HOD</option>
                <option value="PROJECT_IN_CHARGE">PROJECT_IN_CHARGE</option>
                <option value="INTERNAL_GUIDE">INTERNAL_GUIDE</option>
                <option value="STUDENT">STUDENT</option>
            </select>
             <br/><br/>
            <button type="submit" className='button'>Register</button>
            <div className='link'>
                <p>Already have an account? <a href="/login">Login</a></p>
            </div>
        </form>
    </div>
  )
}

export default Register 
