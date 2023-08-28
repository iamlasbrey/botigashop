import axios from 'axios'

const API_URL = 'http://localhost:5002/api/auth'

//Register 
const register  = async(userData:any)=>{
    const response = await axios.post(API_URL+'/register',userData)
    if(response.data){
        localStorage.setItem('user',JSON.stringify(response.data))
    }
    return response.data
}

const authService = {
    register
}

export default authService