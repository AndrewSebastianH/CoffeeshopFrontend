import axios from "axios"

export const userApi = axios.create({
    baseURL: 'http://localhost:8080/users'
})

export const getUserItems = async () => {
    const response = await userApi.get('/')
    return response.data
}