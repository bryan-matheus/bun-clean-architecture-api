import Elysia, { t } from "elysia";
import RegisterUser from "../core/users/service/register-user";
import FindAllUsers from "../core/users/service/find-all-users";

export default class FindAllUsersController {
    constructor(
        readonly server: Elysia,
        useCase: FindAllUsers,
    ) {
        server.get("/users", async ({set}) => {
            const users = await useCase.execute();

            set.status = 200;

            return users;
        });
    }
}
