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
    },
    getAllUsers: () => axios.get(API_BASE_URL),
    getUserById: (id) => axios.get(`${API_BASE_URL}/${id}`),
addUser: (data) => axios.post(API_BASE_URL, data),
updateUser: (id, data) => axios.put(`${API_BASE_URL}/${id}`, data),
deleteUser: (id) => axios.delete(`${API_BASE_URL}/${id}`),

    }

    export default ApiService;
