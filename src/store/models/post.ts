import { User } from "./user";
import { Category } from "./category";
import { Tag } from "./tag";
import { Comment } from "./comment";

export class Post {
	id = 0;
	title = "";
	content = "";
	location = "";
	capacity = 0;
	date!: Date;
	timeOfDay = -1;
	createdDate!: Date;
	author!: User;
	category!: Category;
	tags: Tag[] = [];
	comments: Comment[] = [];
	images: Array<string> = [];
	isLiked = false;
}
