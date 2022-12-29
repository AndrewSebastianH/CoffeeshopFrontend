import axios from "axios"

export const adminMenuApi = axios.create({
    baseURL: 'http://localhost:8080/menu'
})

export const getAdminMenuItems = async () => {
    const response = await adminMenuApi.get('/')
    return response.data
}