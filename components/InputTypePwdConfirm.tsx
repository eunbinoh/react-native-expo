import React from "react";
import { Controller, useFormContext, useWatch } from "react-hook-form";
import { StyleSheet } from "react-native";
import InputField from "./InputField";

function InputTypePwdConfirm() {
  const { control } = useFormContext();
  const passwordWatch = useWatch({ control, name: "password" });

  return (
    <Controller
      name="passwordConfirm"
      control={control}
      rules={{
        validate: (value: string) => {
          if (value.length === 0) {
            return "비밀번호 확인란을 입력해주세요.";
          }
          if (value !== passwordWatch) {
            return "비밀번호가 일치하지 않습니다.";
          }
        },
      }}
      render={({ field: { ref, onChange, value }, fieldState: { error } }) => (
        <InputField
          ref={ref}
          label="비밀번호 확인"
          placeholder="비밀번호 확인란을 입력해주세요."
          value={value}
          secureTextEntry
          textContentType="oneTimeCode"
          onChangeText={onChange}
          error={error?.message}
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

export default InputTypePwdConfirm;
