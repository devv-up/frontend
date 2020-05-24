import service from "@/utils/request";
import { PostId } from "detail";

/**
 * Get the list of posts
 * @param {string} id
 * @param {string} title
 * @param {string} location
 * @param {string} capacity
 * @param {string} date
 * @param {number} timeOfDay
 * @param {string} createdDate
 * @param {string} author
 * @param {string} Category
 * @param {string} tags tags=python,diango
 * @param {string} comments
 */

export const getPostId = (params: {}) =>
  service.request<PostId[]>({
    url: "posts/1",
    method: "GET",
    params
  });
