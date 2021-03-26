import axios from "axios"

const api = axios.create({
    baseURL: "https://quarkus-crud-backend.herokuapp.com"
});

export default api;