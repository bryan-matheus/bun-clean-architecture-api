import UseCase from "../../shared/use-case";
import User from "../model/User";
import UserRepository from "./user-repository";

export default class FindAllUsers implements UseCase<void, User[]> {
    constructor(private readonly repository: UserRepository) {}

    async execute(input: void): Promise<User[]> {
        return await this.repository.findAllUsers();
    }
}
