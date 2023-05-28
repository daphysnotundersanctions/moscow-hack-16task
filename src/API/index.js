import axios from "axios";

export const API = axios.create({
  baseURL: "http://91.200.151.58:8080/api/v1/",
  responseType: "json",
  headers: {
    "X-Custom-Header": "foobar",
    "Access-Control-Allow-Origin": "*",
    Authorization: `Bearer ${sessionStorage.getItem("key")}`,
  },
});
