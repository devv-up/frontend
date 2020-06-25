import { http } from "@/utils/request";

/**
 * Get the list of postsssss
 *
 */
export const apiDeleteComment = (params: Record<number, number | string>) => {
  http.request({
    url: `/posts/comments/${params}`,
    method: "DELETE"
  });
};
