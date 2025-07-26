import React, { useState } from 'react'
import './Login.css'
import ApiService from '../services/ApiService'

const Login = () => {
    const [formData,setFormData]=useState({
        email: "",
        password: ""
    });
    async function handleSubmit(event){
        event.preventDefault();
        try{
            const response=await ApiService.login(formData)
            console.log('Login Successful', response.data);
      alert('Login successful!');
        }
        catch (error) {
      console.error('Login failed', error);
      alert('Invalid credentials. Please try again.');
    }
    }
  return (
    <div>
        <h1> Login Page </h1>
        <form onSubmit={handleSubmit}>
            <label>Username :</label>
            <input
             type="email" 
             name="email" 
             value={formData.email}
             onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            placeholder="Enter your email" />

         <label>Password :</label>
            <input 
            type="password" 
            name="password" 
            value={formData.password}
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            placeholder="Enter your password" />

            <button type="submit" className='button'>Login</button>
        <div>
          <p>Don't have an account? <a href="/register">Register</a></p>
        </div>
        </form>
    </div>
  )
}

export default Login  

