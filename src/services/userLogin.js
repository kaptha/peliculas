import axios from "axios"

const login = async (email, password) => {
    try{
        const response = await axios.post('http://localhost:5500/user/login',
    {
        email: email,
        password: password
    }
    )
    return response.data
    }catch(error){
        return null;
    }
    
}
export {
    login
}