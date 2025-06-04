import FixedBottomCTA from "@/components/FixedBottomCTA";
import InputTypeEmail from "@/components/InputTypeEmail";
import InputTypePwd from "@/components/InputTypePwd";
import InputTypePwdConfirm from "@/components/InputTypePwdConfirm";
import useAuth from "@/hooks/query/useAuth";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { StyleSheet, View } from "react-native";

type FormValues = {
  email: string;
  password: string;
  passwordConfirm: string;
};

export default function Signup() {
  const { signupMutation } = useAuth();
  const signupForm = useForm<FormValues>({
    defaultValues: {
      email: "",
      password: "",
      passwordConfirm: "",
    },
  });

  const onSubmit = (formValue: FormValues) => {
    const { email, password } = formValue;
    signupMutation.mutate({ email, password });
  };

  return (
    <FormProvider {...signupForm}>
      <View style={styles.container}>
        <InputTypeEmail />
        <InputTypePwd submitBehavior="submit" />
        <InputTypePwdConfirm />
      </View>
      <FixedBottomCTA
        label="회원가입하기"
        onPress={signupForm.handleSubmit(onSubmit)}
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
