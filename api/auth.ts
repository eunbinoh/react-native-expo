import { getScureStore } from "@/utils/secureStore";
import axiosInstance from "./axios";

type RequestUser = {
  email: string;
  password: string;
};

async function postSignup(body: RequestUser): Promise<void> {
  const { data } = await axiosInstance.post("/auth/signup", body);

  return data;
}

async function postLogin(body: RequestUser): Promise<{ accessToken: string }> {
  const { data } = await axiosInstance.post("/auth/login", body);

  return data;
}

async function getMyInfo(body: RequestUser): Promise<{ accessToken: string }> {
  const accessToken = await getScureStore("accessToken");
  const { data } = await axiosInstance.get("/auth/myInfo", {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  return data;
}

export { getMyInfo, postLogin, postSignup };
