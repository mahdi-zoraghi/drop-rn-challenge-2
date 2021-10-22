import Axios from "axios";
import querystring from "query-string";

export const axios = Axios.create({
  baseURL: "https://reqres.in/api",
  headers: {
    // "Content-Type": "application/x-www-form-urlencoded",
    "Content-Type": "application/json",
  },
});

export const register = (user) => axios.post("/users", user);
