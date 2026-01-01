import { IsEmail, MinLength } from "class-validator";
import { Post } from "../posts/post";
import { UUID } from "typeorm/driver/mongodb/bson.typings.js";
import { randomUUID } from "crypto";

export class User {
	id: string;
	@MinLength(1)
	name: string;
	@IsEmail()
	email: string;

	private constructor(id: string, name: string, email: string) {
		this.id = id;
		this.name = name;
		this.email = email;
	}

	static create(name: string, email: string): User {
		return new User(randomUUID(), name, email);
	}

	static reconstitute(id: string, name: string, email: string): User {
		return new User(id, name, email);
	}
}
