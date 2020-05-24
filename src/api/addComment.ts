import service from "@/utils/request";
import { AddComment } from "addComment";

/**
 * Get the list of postsssss
 *
 */
export const setAddComment = (params: [{}]) =>
  service.request<AddComment[]>({
    url: "/posts/comments",
    method: "POST",
    params
  });
