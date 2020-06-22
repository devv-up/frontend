import service from "@/utils/request";
import { InterAddComment } from "addComment";

/**
 * Get the list of postsssss
 *
 */
export const apiAddComment = (params: {}) =>
  service.request<InterAddComment>({
    url: "/posts/comments",
    method: "POST",
    data: params,
  })
