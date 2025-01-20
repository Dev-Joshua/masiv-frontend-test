import axios from "axios";

// Configuro la URL de la API para que coincida con el proxy configurado en  vite.config.js
const instance = axios.create({
  baseURL: "/api",
});

export default instance;
