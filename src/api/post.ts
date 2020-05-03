import service from "@/utils/request";
import { Post, Category, Tag } from "board";

/**
 * Get the list of posts
 * @param {number} page
 * @param {number} pageSize
 * @param {string} startDate
 * @param {string} endDate
 * @param {number} timeOfDay
 * @param {string} location
 * @param {string} Category
 * @param {string} tags tags=python,diango
 */
export const fetchPosts = (params: Record<string, string | number>) =>
  service.request<Post[]>({
    url: "posts",
    method: "GET",
    params
  });

/**
 * GET the list of categories
 */
export const fetchCategories = () =>
  service.request<Category[]>({
    url: "posts/categories",
    method: "GET"
  });

/**
 * GET the list of tags
 */
export const fetchTags = () =>
  service.request<Tag[]>({
    url: "posts/tags",
    method: "GET"
  });
