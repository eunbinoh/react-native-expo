import axios from "axios";
import { Platform } from "react-native";

const axiosInstance = axios.create({
  baseURL:
    Platform.OS === "ios"
      ? "http://localhost:3030"
      : "http://172.16.16.42:3030",
});

export default axiosInstance;
