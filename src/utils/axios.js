import axios from "axios";

// Configuro la URL base de la API
const instance = axios.create({
  baseURL: "/api",
});

export default instance;
