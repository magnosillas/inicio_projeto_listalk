import api from "../http-common-kay";

export async function postLogin(login, password){
    return await api.post("realms/lmts/protocol/openid-connect/token",{
        client_id: "app_lmts",
        client_secret: "Zlz3mGMEuuWGXAlUSjUE72qI0xZsaTPk",
        username: login,
        password: password,
        grant_type: "password",
    })
} 