import axios from "axios";
import config from "../config";

const { BASE_URL } = config;

const axiosInstance = axios.create({
  baseURL: BASE_URL,
});

export { axiosInstance };
