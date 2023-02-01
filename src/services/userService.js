import axios from '../interceptors/commonInterceptor';
const userEndpoint = 'user';
const getAlluser = ()=> axios.get(userEndpoint)

export const userService ={
    getAlluser
}