import { PrismaClient } from "@prisma/client";
import User from "../../core/users/model/User";
import UserRepository from "../../core/users/service/user-repository";

export default class UserRepositoryPrisma implements UserRepository {
    private prisma: PrismaClient;

    constructor() {
        this.prisma = new PrismaClient();
    }

    async create(user: User): Promise<User> {
        return await this.prisma.user.create({
            data: user,
        });
    }

    async findAllUsers(): Promise<User[]> {
        return await this.prisma.user.findMany();
    }

    async findByEmail(email: string): Promise<User | null> {
        const userFoundByEmail = await this.prisma.user.findUnique({
            where: {
                email,
            }
        })

        if (!userFoundByEmail) {
            return null;
        }

        return userFoundByEmail;
    }

}
