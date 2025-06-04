import FixedBottomCTA from "@/components/FixedBottomCTA";
import InputTypeEmail from "@/components/InputTypeEmail";
import InputTypePwd from "@/components/InputTypePwd";
import useAuth from "@/hooks/query/useAuth";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { StyleSheet, View } from "react-native";

type FormValues = {
  email: string;
  password: string;
};

export default function Login() {
  const { loginMutation } = useAuth();
  const loginForm = useForm<FormValues>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (formValue: FormValues) => {
    const { email, password } = formValue;
    loginMutation.mutate({ email, password });
  };

  return (
    <FormProvider {...loginForm}>
      <View style={styles.container}>
        <InputTypeEmail />
        <InputTypePwd />
      </View>
      <FixedBottomCTA
        label="로그인하기"
        onPress={loginForm.handleSubmit(onSubmit)}
      />
    </FormProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    gap: 16,
  },
});
