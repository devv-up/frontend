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

export const apiUpdateComment = (params: Record<string, string | number>) => {
  http.request<AddComment>({
    url: `/posts/comments/${params}`,
    method: "PUT",
    data: params
  });
};

export const apiDeleteComment = (params: Record<number, number | string>) => {
  http.request({
    url: `/posts/comments/${params}`,
    method: "DELETE"
  });
};
