// import axios from "axios";

// const API = axios.create({
//   baseURL: "http://localhost:5000/api"
// });

// export const registerUser = async (userData) => {
//   return await API.post("/register", userData);
// };
// export const loginUser = async (userData) => {
//   return await API.post("/login", userData);
// };
// export const getTours = async () => {
//   return await API.get("/tours");
// };
// export const getTourById = async (id) => {
//   return await API.get(`/tours/${id}`);
// };



import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api"
});

export const registerUser = async (userData) => {
  return await API.post("/register", userData);
};
export const loginUser = async (userData) => {
  return await API.post("/login", userData);
};
export const getTours = async () => {
  return await API.get("/tours");
};
export const getTourById = async (id) => {
  return await API.get(`/tours/${id}`);
};