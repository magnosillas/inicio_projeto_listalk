import api from "../http-common-kay";

export async function getCategoria(){
    return await api.get("/category")
} 