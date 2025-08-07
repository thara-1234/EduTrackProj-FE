import React, { useState } from 'react'
import './ProfileComplete.css'
import ApiService from '../services/ApiService';
import { useNavigate } from 'react-router-dom';
const ProfileComplete = () => {
    const[profile,setProfile]=useState({
        profilePic:'',
        phoneNumber:'',
        department:''
    });
    const navigate=useNavigate();
    async function handleSubmit(e){
        e.preventDefault();
         const email = localStorage.getItem('email');
  const formData = new FormData();

  formData.append('email', email);
  formData.append('phoneNumber', profile.phoneNumber);
  formData.append('department', profile.department);
  formData.append('profilePic', profile.profilePic);
        try {
    await ApiService.profileComplete(formData);
    alert('Profile updated successfully!');
    navigate('/');
  } 
        catch(error){
          console.log(error);
          alert('Please complete the profile')
          navigate('/')
        }
    }        
    
  return (
    <div className='profile-container'>
        <form onSubmit={handleSubmit}>
        <h1>Profile Complete..</h1>
        <label>Upload your Profile Picture</label><br /><br />
        <input 
        type='file' 
        name='profilePic' 
        onChange={(e) => setProfile({ ...profile, profilePic: e.target.files[0] })}
        />
        <br /><br />

        <label>Phone Number</label>
        <input 
        type='text' 
        name='phoneNumber' 
        value={profile.phoneNumber}
        onChange={(e)=>{setProfile({...profile,phoneNumber:e.target.value})}}
        />
        <br /><br />

        <label>Department</label>
        <input 
        type='text' 
        name='department' 
        value={profile.department}
        onChange={(e)=>{setProfile({...profile,department:e.target.value})}}
        />
        <br /><br />
        <button type='submit'>Save</button>
        </form>
        
    </div>
  )
}

export default ProfileComplete