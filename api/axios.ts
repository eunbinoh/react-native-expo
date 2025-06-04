import axios from "axios";
import { Platform } from "react-native";

const axiosInstance = axios.create({
  baseURL:
    Platform.OS === "ios"
      ? "http://localhost:8081"
      : "http://172.16.16.42:8081",
});

export default axiosInstance;
