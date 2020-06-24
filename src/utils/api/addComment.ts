import { http } from "@/utils/request";
import { AddComment } from "@/store/models/addComment";

/**
 * Get the list of postsssss
 *
 */
export const apiAddComment = (params: Record<string, string | number>) => {
  http.request<AddComment>({
    url: "/posts/comments",
    method: "POST",
    data: params
  });
};
