import { CreatePostDto, Post, RequestUpdatePost } from "@/types";
import axiosInstance from "./axios";

async function createPost(body: CreatePostDto) {
  const { data } = await axiosInstance.post("/posts", body);
  return data;
}

async function getPosts(page: number = 1): Promise<Post[]> {
  const { data } = await axiosInstance.get(`/posts?page=${page}`);
  return data;
}

async function getPost(postId: number): Promise<Post> {
  const { data } = await axiosInstance.get(`/posts/${postId}`);
  return data;
}

async function deletePost(postId: number): Promise<number> {
  const { data } = await axiosInstance.delete(`/post/${postId}`);
  return data;
}

async function updatePost({ id, body }: RequestUpdatePost): Promise<number> {
  const { data } = await axiosInstance.patch(`/posts/${id}`, body);
  return data;
}

export { createPost, deletePost, getPost, getPosts, updatePost };
