import { Elysia } from "elysia";
import UserRepositoryMemory from "./external/memory/user-repository-memory";
import RegisterUser from "./core/users/service/register-user";
import RegisterUserController from "./adapters/register-user.controller";
import UserRepositoryPrisma from "./external/prisma/user-repository-prisma";
import FindAllUsers from "./core/users/service/find-all-users";
import FindAllUsersController from "./adapters/fin-all-users.controller";

const app = new Elysia()

const userRepository = new UserRepositoryPrisma();
const registerUser = new RegisterUser(userRepository);
const findAllUsers = new FindAllUsers(userRepository);

new RegisterUserController(app, registerUser);
new FindAllUsersController(app, findAllUsers);

app.listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
