import FixedBottomCTA from "@/components/FixedBottomCTA";
import InputTypeEmail from "@/components/InputTypeEmail";
import InputTypePwd from "@/components/InputTypePwd";
import InputTypePwdConfirm from "@/components/InputTypePwdConfirm";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { StyleSheet, View } from "react-native";

type FormValues = {
  email: string;
  password: string;
  passwordConfirm: string;
};

export default function Signup() {
  const signupForm = useForm<FormValues>({
    defaultValues: {
      email: "",
      password: "",
      passwordConfirm: "",
    },
  });

  const onSubmit = (formValue: FormValues) => {
    console.log(formValue.email.length);
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
