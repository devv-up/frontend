import { http } from "@/utils/request";
import { Comment } from "@/store/models/comment";

/**
 * Get the list of postsssss
 *
 */
export const apiAddComment = (params: Record<string, string | number>) => {
  http.request<Comment[]>({
    url: "/posts/comments",
    method: "POST",
    data: params
  });
};
