import colors from "@/constants";
import { Post } from "@/types";
import { FlatList, StyleSheet } from "react-native";
import FeedItem from "./FeedItem";

export default function FeedList() {
  const dummyPosts = [
    {
      id: 1,
      userId: 1,
      title: "Title",
      description:
        "로렘 입숨(lorem ipsum; 줄여서 립숨, lipsum)은 출판이나 그래픽 디자인 분야에서 폰트, 타이포그래피, 레이아웃 같은 그래픽 요소나 시각적 연출을 보여줄 때 사용합니다. 타이포그래피, 레이아웃 같은 그래픽 요소나 시각적 연출을 보여줄 때 사용합니다.",
      createdAt: "2025-06-01",
      author: { id: 1, nickname: "감자" },
      imageUris: [{ id: 1, uri: "test" }],
      likes: [{ userId: 1 }, { userId: 2 }, { userId: 3 }],
      hasVote: false,
      voteCount: 1,
      commentCount: 7,
      viewCount: 10,
    },
    {
      id: 2,
      userId: 2,
      title: "dummy title",
      description:
        "로렘 입숨(lorem ipsum; 줄여서 립숨, lipsum)은 출판이나 그래픽 디자인 분야에서 폰트, 타이포그래피, 레이아웃 같은 그래픽 요소나 시각적 연출을 보여줄 때 사용합니다. 타이포그래피, 레이아웃 같은 그래픽 요소나 시각적 연출을 보여줄 때 사용합니다.",
      createdAt: "2025-06-02",
      author: { id: 1, nickname: "고구마" },
      imageUris: [{ id: 1, uri: "test" }],
      likes: [{ userId: 1 }, { userId: 2 }, { userId: 3 }],
      hasVote: false,
      voteCount: 1,
      commentCount: 7,
      viewCount: 10,
    },
    {
      id: 3,
      userId: 3,
      title: "test title",
      description:
        "로렘 입숨(lorem ipsum; 줄여서 립숨, lipsum)은 출판이나 그래픽 디자인 분야에서 폰트, 타이포그래피, 레이아웃 같은 그래픽 요소나 시각적 연출을 보여줄 때 사용합니다. 타이포그래피, 레이아웃 같은 그래픽 요소나 시각적 연출을 보여줄 때 사용합니다.",
      createdAt: "2025-06-03",
      author: { id: 1, nickname: "토마토" },
      imageUris: [{ id: 1, uri: "test" }],
      likes: [{ userId: 1 }, { userId: 2 }, { userId: 3 }],
      hasVote: false,
      voteCount: 1,
      commentCount: 7,
      viewCount: 10,
    },
    {
      id: 4,
      userId: 4,
      title: "test title",
      description:
        "로렘 입숨(lorem ipsum; 줄여서 립숨, lipsum)은 출판이나 그래픽 디자인 분야에서 폰트, 타이포그래피, 레이아웃 같은 그래픽 요소나 시각적 연출을 보여줄 때 사용합니다. 타이포그래피, 레이아웃 같은 그래픽 요소나 시각적 연출을 보여줄 때 사용합니다.",
      createdAt: "2025-06-04",
      author: { id: 1, nickname: "가지" },
      imageUris: [{ id: 1, uri: "test" }],
      likes: [{ userId: 1 }, { userId: 2 }, { userId: 3 }],
      hasVote: false,
      voteCount: 1,
      commentCount: 7,
      viewCount: 10,
    },
    {
      id: 5,
      userId: 5,
      title: "test title",
      description:
        "로렘 입숨(lorem ipsum; 줄여서 립숨, lipsum)은 출판이나 그래픽 디자인 분야에서 폰트, 타이포그래피, 레이아웃 같은 그래픽 요소나 시각적 연출을 보여줄 때 사용합니다. 타이포그래피, 레이아웃 같은 그래픽 요소나 시각적 연출을 보여줄 때 사용합니다.",
      createdAt: "2025-06-05",
      author: { id: 1, nickname: "호박" },
      imageUris: [{ id: 1, uri: "test" }],
      likes: [{ userId: 1 }, { userId: 2 }, { userId: 3 }],
      hasVote: false,
      voteCount: 1,
      commentCount: 7,
      viewCount: 10,
    },
  ];
  return (
    <FlatList
      data={dummyPosts}
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
