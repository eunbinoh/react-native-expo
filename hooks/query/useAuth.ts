import { getMyInfo, postLogin, postSignup } from "@/api/auth";
import queryClient from "@/api/queryClient";
import { Profile } from "@/types";
import { setHeader } from "@/utils/header";
import { deleteScureStore, saveScureStore } from "@/utils/secureStore";
import { useMutation, useQuery } from "@tanstack/react-query";
import { router } from "expo-router";
import { useEffect } from "react";

function useSignup() {
  return useMutation({
    mutationFn: postSignup,
    onSuccess: () => router.replace("/auth/login"),
    onError: (error) => {
      console.error(error);
    },
  });
}

function useLogin() {
  return useMutation({
    mutationFn: postLogin,
    onSuccess: async ({ accessToken }) => {
      setHeader("Authorization", `Bearer ${accessToken}`);
      await saveScureStore("accessToken", accessToken);
      queryClient.fetchQuery({ queryKey: ["auth", "myInfo"] });
      router.replace("/");
    },
    onError: (error) => {
      console.error(error);
    },
  });
}

function useGetMyInfo() {
  const { data, isError } = useQuery<Profile>({
    queryFn: getMyInfo,
    queryKey: ["auth", "myInfo"],
  });

  useEffect(() => {
    if (isError) {
      deleteScureStore("accessToken");
    }
  }, [isError]);

  return { data };
}

function useAuth() {
  const { data } = useGetMyInfo();
  const loginMutation = useLogin();
  const signupMutation = useSignup();

  return {
    auth: {
      id: data?.id || 0,
    },
    loginMutation,
    signupMutation,
  };
}

export default useAuth;
