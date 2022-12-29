import axios from "axios"

export const ingredientApi = axios.create({
    baseURL: 'http://localhost:8080/ingredients'
})

export const getIngredientItems = async () => {
    const response = await ingredientApi.get('/')
    return response.data
}