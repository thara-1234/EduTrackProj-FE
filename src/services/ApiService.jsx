import axios from 'axios';

const API_BASE_URL = 'http://localhost:8094/users'; 
const ApiService = {
    registerUser:(data)=>{
        console.log(data)
        return axios.post(API_BASE_URL+'/register',data)
    },
    login :(data)=>{return axios.post(API_BASE_URL+'/login',data)
        },
    profileComplete:(data)=>{
        return axios.post(API_BASE_URL+'/profile-complete',data,{
            headers: {
      'Content-Type': 'multipart/form-data'
    }
        });
    }
    }

    export default ApiService;
