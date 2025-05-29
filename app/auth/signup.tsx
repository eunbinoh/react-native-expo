import FixedBottomCTA from "@/components/FixedBottomCTA";
import InputFiled from "@/components/InputFiled";
import React from "react";
import { StyleSheet, View } from "react-native";

export default function Signup() {
  return (
    <>
      <View style={styles.container}>
        <InputFiled label="이메일" placeholder="이메일을 입력해주세요." />
        <InputFiled label="비밀번호" placeholder="비밀번호를 입력해주세요." />
        <InputFiled
          label="비밀번호 확인"
          placeholder="비밀번호를 입력해주세요."
        />
      </View>
      <FixedBottomCTA label="회원가입하기" onPress={() => {}} />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    gap: 16,
  },
});
