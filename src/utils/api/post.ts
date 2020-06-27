import { http } from "@/utils/request";
import { Post } from "@/store/models/post";
import { Category } from "@/store/models/category";
import { Tag } from "@/store/models/tag";
import { PostId } from "@/store/models/detail";

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
export const fetchPosts = (params?: Record<string, string | number>) =>
	http.request<Post[]>({
		url: "posts",
		method: "GET",
		params
	});

/**
 * GET the list of categories
 */
export const fetchCategories = () =>
	http.request<Category[]>({
		url: "posts/categories",
		method: "GET"
	});

/**
 * GET the list of tags
 */
export const fetchTags = () =>
	http.request<Tag[]>({
		url: "posts/tags",
		method: "GET"
	});

export const getPostId = (params: {}) =>
	http.request<PostId>({
		url: "posts/1",
		method: "GET",
		params
	});
