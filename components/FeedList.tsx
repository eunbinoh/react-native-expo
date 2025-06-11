import { colors } from "@/constants";
import useGetInfinitePosts from "@/hooks/query/useInfinitePosts";
import { Post } from "@/types";
import { FlatList, StyleSheet } from "react-native";
import FeedItem from "./FeedItem";

export default function FeedList() {
  const { data: posts } = useGetInfinitePosts();
  return (
    <FlatList
      data={posts?.pages.flat()}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => <FeedItem post={item as Post} />}
      contentContainerStyle={styles.contentContainer}
    />
  );
}

const styles = StyleSheet.create({
  contentContainer: {
    paddingVertical: 12,
    backgroundColor: colors.GR_100,
    gap: 12,
  },
});
