import axios from "axios";

const apiClient = axios.create({
    baseURL: "https://pokeapi.co/api/v2/",
    timeout: 5000,
    headers: {
        "content-type": "application/json",
        "accept": "application/json"
    }
});

export { apiClient };