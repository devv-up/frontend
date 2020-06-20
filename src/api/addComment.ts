import service from "@/utils/request";
import { AddComment } from "addComment";

/**
 * Get the list of postsssss
 *
 */
export const apiAddComment = (param: any) =>
  service.post(
    "/posts/comments",
    param = { param1: "", param2: 0 }
  )
