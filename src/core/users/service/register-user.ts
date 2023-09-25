import UseCase from "../../shared/use-case";
import User from "../model/User";
import UserRepository from "./user-repository";

type Input = Pick<User, "name" | "email" | "password">;

export default class RegisterUser implements UseCase<Input, void> {
    constructor(private readonly repository: UserRepository) {}

    async execute(input: Input): Promise<void> {
        const {name, email, password} = input;

        const userExists = await this.repository.findByEmail(email);

        if (userExists) {
            throw new Error("User already exists.");
        }

        await this.repository.create({name, email, password});
    }
}
