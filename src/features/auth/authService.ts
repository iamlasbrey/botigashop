import axios from 'axios'

//Register User
const register  = async(userData:any)=>{
    const response = await axios.post('/api/auth/register',userData)
    if(response.data){
        localStorage.setItem('user',JSON.stringify(response.data))
    }
    return response.data
}


//Login User 
const login  = async(userData:any)=>{
    const response = await axios.post('/api/auth/login',userData)
    if(response.data){
        localStorage.setItem('user',JSON.stringify(response.data))
    }
    return response.data
}

const logout=()=>{
    localStorage.removeItem('user')
}

const authService = {
    register,
    login,
    logout
}

export default authService