import React from "react";
import { Controller, useFormContext } from "react-hook-form";
import { StyleSheet, TextInputProps } from "react-native";
import InputFiled from "./InputFiled";

interface Props {
  submitBehavior?: TextInputProps["submitBehavior"];
}

function InputTypePwd({ submitBehavior = "blurAndSubmit" }: Props) {
  const { control, setFocus } = useFormContext();

  return (
    <Controller
      name="password"
      control={control}
      rules={{
        validate: (value: string) => {
          if (value.length < 8) {
            return "비밀번호는 8자 이상 입력해주세요.";
          }
        },
      }}
      render={({ field: { ref, onChange, value }, fieldState: { error } }) => (
        <InputFiled
          ref={ref}
          label="비밀번호"
          placeholder="비밀번호를 입력해주세요."
          value={value}
          secureTextEntry
          textContentType="oneTimeCode"
          submitBehavior={submitBehavior}
          onChangeText={onChange}
          error={error?.message}
          onSubmitEditing={() => setFocus("passwordConfirm")}
        />
      )}
    />
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default InputTypePwd;
