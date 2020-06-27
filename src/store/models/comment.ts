import { User } from "./user";

export class Comment {
	id = 0;
	content = "";
	createdDate!: Date;
	parentComment!: number;
	author!: User;
	is_active = false;
}
