import service from "@/utils/request";
import { AddComment } from "addComment";

/**
 * Get the list of postsssss
 *
 */
export const apiAddComment = (param1: string, param2: number) =>
  service.request({
    url: "/posts/comments",
    method: "POST",
    data: { param1, param2 }
  });
