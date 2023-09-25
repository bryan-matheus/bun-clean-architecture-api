import User from "../../core/users/model/User";
import UserRepository from "../../core/users/service/user-repository";

export default class UserRepositoryMemory implements UserRepository {
    private readonly users: User[] = [];

    async create(user: User): Promise<User> {
        const newUser = {...user, id: Math.random() * 1000}

        this.users.push(newUser);

        return newUser;
    }

    async findAllUsers(): Promise<User[]> {
        return this.users;
    }

    async findByEmail(email: string): Promise<User | null> {
        const userFoundByEmail = this.users.find(user => user.email === email);

        if (!userFoundByEmail) {
            return null;
        }

        return userFoundByEmail;
    }
}
