import axios from 'axios';
import { Redirect } from 'react-router-dom';

export const reqI= axios.interceptors.request.use(
    (req) => {
        //Adding tokens in every request calling api headers  to authentication 

        const token=localStorage.getItem('token'),refreshToken=localStorage.getItem('refreshToken');
        req.headers['x-token'] = token;
        req.headers['x-refresh-token'] = refreshToken;

        return req;
    },
    (err) => {
       return Promise.reject(err);
    }
 );
 export const resI=axios.interceptors.response.use(
    (res) => {
        //Retrieving tokens from response headers
        
        const token=res.headers['x-token'];
        const refreshToken=res.headers['x-refresh-token'];
        // console.log(token);
        if(token && refreshToken){
            localStorage.setItem('token',token);
            localStorage.setItem('refreshToken',refreshToken);
        }
        
        return res;
    },
    (err) => {
       return Promise.reject(err);
    }
 );


