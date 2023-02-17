import axios from 'axios'
const baseUrl = 'http://localhost:5000/'
axios.interceptors.request.use(function (config) {
    // Do something before request is sent
    const token =localStorage.getItem('token')||''
    config.url = baseUrl +config.url
    config.headers = {'Authorization':'Bearer '+token}
    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });

// Add a response interceptor
axios.interceptors.response.use(function (response) {
    return response;
  }, function (error) {
    
    if(error.response.status==403)
     window.location.replace('/login')
    return Promise.reject(error);
  });
export default axios