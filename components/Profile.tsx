import colors from "@/constants";
import React from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
interface ProfileProps {
  onPress: () => void;
  nickname: string;
  imageUri?: string;
  createdAt: string;
  option?: React.ReactNode;
}
const Profile = ({
  onPress,
  imageUri,
  nickname,
  createdAt,
  option,
}: ProfileProps) => {
  return (
    <View style={styles.container}>
      <Pressable style={styles.profile} onPress={onPress}>
        <Image
          source={
            imageUri
              ? { uri: imageUri }
              : require("@/assets/images/default-avatar.png")
          }
          style={styles.avatar}
        />
        <View>
          <Text style={styles.nickname}>{nickname}</Text>
          <Text style={styles.createdAt}>{createdAt}</Text>
        </View>
      </Pressable>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  profile: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 50,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: colors.GR_300,
  },
  nickname: {
    fontSize: 16,
    fontWeight: "bold",
    color: colors.BK,
    marginBottom: 6,
  },
  createdAt: {
    fontSize: 14,
    color: colors.BK,
  },
});
export default Profile;
