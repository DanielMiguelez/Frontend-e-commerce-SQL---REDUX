import axios from 'axios'

const API_URL = "http://localhost:3000"

const register = async(userData) =>{
    const response = await axios.post(API_URL + "/users/createUser", userData)
        return response.data;
}

const login = async(userData) =>{
    const response = await axios.post(API_URL + "/users/login", userData)
    if(response.data){
        localStorage.setItem("user", JSON.stringify(response.data.user))
        localStorage.setItem("token", JSON.stringify(response.data.token))
    }
    return response.data
}

const logout = async () =>{
    const user = JSON.parse(localStorage.getItem("user"))
    const token = JSON.parse(localStorage.getItem("token"))

    const response = await axios.delete (API_URL + "/users/logout", {
        headers: {
            authorization:token
        }
    })
    if(response.data){
        localStorage.removeItem("user")
    }
    return response.data
}

const authService = {
    register,
    login,
    logout
}


export default authService