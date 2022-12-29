import axios from "axios"

export const menuApi = axios.create({
    baseURL: 'http://localhost:8080/menu'
})

export const getMenuItems = async () => {
    const response = await menuApi.get('/')
    return response.data
}