import axios from '../interceptors/commonInterceptor';
const userEndpoint = 'user';
const authEndpoint = 'auth/';
const getAlluser = ()=> axios.get(userEndpoint)
const getUser = (username)=>axios.get(authEndpoint+username)
export const userService ={
    getAlluser,getUser
}