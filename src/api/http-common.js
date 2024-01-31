// import axios from "axios";

// export default axios.create({
//     baseURL: "http://localhost:8081/",
//     headers:  {
//         "Content-Type": "application/json"
//     }
// })

import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8081",

});

// Interceptador para adicionar o token de autorização a cada solicitação
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token"); // Substitua por onde você armazena o token
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  config.headers["Content-Type"] = "application/json";
  return config;
});

export default api;