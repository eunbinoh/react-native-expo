import { getPost } from "@/api/post";
import { queryKeys } from "@/constants";
import { useQuery } from "@tanstack/react-query";

function useGetPost(postId: number) {
  return useQuery({
    queryKey: [queryKeys.POST, queryKeys.GET_POST, postId],
    queryFn: () => getPost(postId),
    enabled: !!postId,
  });
}

export default useGetPost;
