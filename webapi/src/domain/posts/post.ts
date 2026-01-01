import { IsNotEmptyObject } from "class-validator";

export class Post {
	title: string;
	content: string;
	userId: string;
	@IsNotEmptyObject({ nullable: false })
	createdAt: Date = new Date();
	@IsNotEmptyObject({ nullable: false })
	updatedAt: Date = new Date();

	constructor(title: string, content: string, userId: string) {
		this.title = title;
		this.content = content;
		this.userId = userId;
	}
}
