// services/api.js
import axios from "axios";

    const url ="http://localhost:5000";
   
// const API = axios.create({
//   baseURL: "http://localhost:5000/api",
// });


export const registerUser = async (userData) => {
  return await API.post("/register", userData);
};


export const loginUser = async (userData) => {
  return await API.post("/login", userData);
};
