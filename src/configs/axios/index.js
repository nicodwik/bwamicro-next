import axios from 'axios'
import errorHandling from './errorHandling'

const instance = axios.create({
    baseURL: `${process.env.NEXT_PUBLIC_API_HOST}`
})

instance.interceptors.response.use((response) => response.data, errorHandling)

export default instance