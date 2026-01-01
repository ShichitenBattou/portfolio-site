import type { UUID } from "crypto";
import type { User } from "./user";

interface IUserRepository {
	findById(id: UUID): Promise<User | null>;
	findByEmail(email: string): Promise<User | null>;
	save(user: User): Promise<User>;
	delete(id: UUID): Promise<void>;
	// Add other necessary methods as per your requirements
}
