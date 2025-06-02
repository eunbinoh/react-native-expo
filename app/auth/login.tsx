import FixedBottomCTA from "@/components/FixedBottomCTA";
import InputTypeEmail from "@/components/InputTypeEmail";
import InputTypePwd from "@/components/InputTypePwd";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { StyleSheet, View } from "react-native";

type FormValues = {
  email: string;
  password: string;
};

export default function Login() {
  const loginForm = useForm<FormValues>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (formValue: FormValues) => {
    console.log(formValue);
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
