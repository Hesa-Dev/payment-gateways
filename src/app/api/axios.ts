
import axios, { AxiosError } from "axios";
import { parseCookies } from "nookies";
import AuthTokenError from "./AutherTokenError";

export default  function setupApiClient(ctx = undefined) {

    let cookies = parseCookies(ctx)
    // criar instancia da api 
    // https://axios-http.com/docs/instance
    
    const api = axios.create({
        baseURL: 'http://localhost:5000',
        headers: {
            // Authorization: `Bearer ${cookies['@autheToken']}`,
            'Content-Type': 'application/json',
            'X-Requested-With': 'XMLHttpRequest',
            // Accept:'application/json',
            //  'Content-Type': 'multipart/form-data'
        }
    })

    api.interceptors.response.use(response => {
        // const token = response.headers['authorization'];
          // Faz alguma coisa antes da requisição ser enviada
        // console.log("Api config | RESPONSE : ", response.data )
        // 
        return response;
    }, (error: AxiosError) => {
        if (error.response?.status === 401) {

            if (typeof window !== undefined) {
                // signOut();
            }
            else {
                return Promise.reject(new AuthTokenError())
            }
        }

        return Promise.reject(error)
    })

    api.interceptors.request.use( request => {

    // Faz alguma coisa antes da requisição ser enviada
    // console.log ("API|Request data " , request.data)

    return request;

}, function (error) {
    // Faz alguma coisa com o erro da requisição
    // console.log("API ERROR. REQUEST | " , error )
    return Promise.reject(error);
});

    return api
}