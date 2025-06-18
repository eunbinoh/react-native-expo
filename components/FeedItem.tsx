import { colors } from "@/constants";
import useAuth from "@/hooks/query/useAuth";
import useDeletePost from "@/hooks/query/useDeletePost";
import { Post } from "@/types";
import { useActionSheet } from "@expo/react-native-action-sheet";
import { Ionicons, MaterialCommunityIcons, Octicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import Profile from "./Profile";

interface FeedItemProps {
  post: Post;
}

export default function FeedItem({ post }: FeedItemProps) {
  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(post.likes.length);
  const [commentCount, setCommentCount] = useState(post.commentCount);
  const [viewCount, setViewCount] = useState(post.viewCount);
  const { auth } = useAuth();
  const { showActionSheetWithOptions } = useActionSheet();
  const deletePost = useDeletePost();

  const handleOptionPress = () => {
    const options = ["삭제", "수정", "취소"];
    const destructiveButtonIndex = 0;
    const cancelButtonIndex = 2;

    showActionSheetWithOptions(
      { options, destructiveButtonIndex, cancelButtonIndex },
      (selectedIndex?: number) => {
        switch (selectedIndex) {
          case destructiveButtonIndex:
            deletePost.mutate(post.id);
            break;
          case 1:
            router.push(`/post/edit/${post.id}`);
            break;
          case cancelButtonIndex:
            break;
          default:
            break;
        }
      }
    );
  };
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Profile
          onPress={() => {}}
          nickname={post.author.nickname}
          imageUri={post.author.imageUri}
          createdAt={post.createdAt}
          option={
            auth.id !== post.author.id && (
              <Ionicons
                name="ellipsis-vertical"
                size={24}
                color={colors.BK}
                onPress={() => {
                  handleOptionPress();
                }}
              />
            )
          }
        />
        <Text style={styles.title}>{post.title}</Text>
        <Text numberOfLines={3} style={styles.description}>
          {post.description}
        </Text>
      </View>
      <View style={styles.reactions}>
        <Pressable
          style={styles.reactionMenu}
          onPress={() => {
            setIsLiked(!isLiked);
            setLikeCount(isLiked ? likeCount - 1 : likeCount + 1);
          }}
        >
          <Octicons
            name={isLiked ? "heart-fill" : "heart"}
            size={16}
            color={isLiked ? colors.VL_600 : colors.VL_300}
          />
          <Text style={isLiked ? styles.activeCount : styles.reactCount}>
            {likeCount}
          </Text>
        </Pressable>
        <Pressable style={styles.reactionMenu}>
          <MaterialCommunityIcons
            name="comment-processing-outline"
            size={16}
            color={colors.VL_300}
          />
          <Text style={styles.reactCount}>{commentCount}</Text>
        </Pressable>
        <Pressable style={styles.reactionMenu}>
          <Octicons name="eye" size={16} color={colors.VL_300} />
          <Text style={styles.reactCount}>{viewCount}</Text>
        </Pressable>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.WH,
  },
  content: {
    padding: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: "600",
    color: colors.BK,
    marginVertical: 8,
  },
  description: {
    fontSize: 16,
    color: colors.BK,
    marginBottom: 14,
  },
  reactions: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    borderTopColor: colors.GR_300,
    borderTopWidth: StyleSheet.hairlineWidth,
    paddingTop: 12,
  },
  reactionMenu: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 16,
    width: "33%",
    gap: 6,
  },
  reactCount: {
    color: colors.GR_500,
    fontSize: 14,
  },
  activeCount: {
    color: colors.VL_600,
    fontWeight: "600",
  },
});
