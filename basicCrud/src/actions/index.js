import axios from "axios";

export const client = axios.create({
  baseURL: "http://api.app.com/api/",
  headers: {
    "Content-Type": "application/json"
  }
})
