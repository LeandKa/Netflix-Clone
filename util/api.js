import axios from 'axios';

const SECRET_KEY = process.env.NEXT_PUBLIC_SECRET_KEY

const Api = axios.create({
    baseURL:'https://api.themoviedb.org/3/',
    params:{
        api_key:SECRET_KEY,
        language:'pt-BR',
    }
})


export default Api;