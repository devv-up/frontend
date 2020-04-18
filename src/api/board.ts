import service from "@/utils/request";
import { Post, Category, Tag } from "board";
/**
 *
 * @param params
 * page: number
 */
export const getPosts = (params: Record<string, string | number>) =>
  service.request<Post[]>({
    url: "/posts.json",
    method: "GET",
    params,
  });

export const getCategories = () =>
  service.request<Category[]>({
    url: "/categories.json",
    method: "GET",
  });
export const getTags = () =>
  service.request<Tag[]>({
    url: "/tags.json",
    method: "GET",
  });
