import service from "@/utils/request";
import { Post } from "board";
/**
 *
 * @param params
 * page: number
 */
export const getPosts = (params: Record<string, string | number>) =>
  service.request<Post[]>({
    url: "/posts.json",
    method: "GET",
    params
  });
