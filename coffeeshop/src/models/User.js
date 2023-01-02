import ApiRequest from "../utility/ApiRequest"

export default class User {
    static login = async (username, password) => {
        return await ApiRequest.set('auth/signin', "POST", {
            username,
            password
        })
    }

    static signup = async ({body}) => {
        return await ApiRequest.set('auth/signup', "POST", body)
    }
}