import { http } from "@/utils/request";
import { Comment } from "@/store/models/comment";

/**
 * Get the list of postsssss
 *
 */
export const apiAddComment = (params: Record<string, string | number>) => {
  http.request<Comment>({
    url: "/posts/comments",
    method: "POST",
    data: params,
    withCredentials: true
  });
};

export const apiUpdateComment = (params: Record<string, string | number>) => {
  http.request<Comment>({
    url: `/posts/comments/${params}`,
    method: "PUT",
    data: params,
    withCredentials: true
  });
};

export const apiDeleteComment = (params: Record<number, number | string>) => {
  http.request({
    url: `/posts/comments/${params}`,
    method: "DELETE",
    withCredentials: true
  });
};
