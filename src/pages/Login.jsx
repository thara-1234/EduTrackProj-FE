import React, { useState } from 'react'
import './Login.css'
import ApiService from '../services/ApiService'
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [formData,setFormData]=useState({
        email: "",
        password: ""
    });
    const navigate=useNavigate();
    async function handleSubmit(event){
        event.preventDefault();
        try{
            const response=await ApiService.login(formData)
            const {role,profileComplete,email}=response.data;//object destructuring and Jackson strips the is of isProfileComplete
            console.log(response.data);

            localStorage.setItem('role', role);//allows the role to persist across page reloads or routes.
            localStorage.setItem('email', email);
            if(!profileComplete){
               navigate('/completeProfile');
            }
            else{
              switch (role) {
                case 'STUDENT':
            navigate('/studentDashboard');
            break;
        case 'ADMIN':
            navigate('/adminDashboard');
            break;
            case 'HOD':
            navigate('/hodDashboard');
            break;
        case 'PROJECT_IN_CHARGE':
            navigate('/project-in-chargeDashboard');
            break;
            case 'INTERNAL_GUIDE':
            navigate('/internalguideDashboard');
            break;
        default:
            navigate('/');
              }
            }
           
    
        }
        catch (error) {
      console.error('Login failed', error);
      alert('Invalid credentials. Please try again.');
    }
    }
  return (
    <div className='login-container'>
        <h1> Login Here.. </h1>
        <form onSubmit={handleSubmit}>
            <label>Username :</label>
            <br/><br/>
            <input
             type="email" 
             name="email" 
             value={formData.email}
             onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            placeholder="Enter your email" />
            <br/><br/>

         <label>Password :</label>
         <br/><br/>
            <input 
            type="password" 
            name="password" 
            value={formData.password}
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            placeholder="Enter your password" />
            <br/><br/>
            
            <button type="submit" className='button'>Login</button>
        <div>
          <p style={{fontSize:'20px'}}>Don't have an account? <a href="/register">Register</a></p>
        </div>
        </form>
    </div>
  )
}

export default Login  

