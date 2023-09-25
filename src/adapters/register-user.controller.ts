import Elysia, { t } from "elysia";
import RegisterUser from "../core/users/service/register-user";

export default class RegisterUserController {
    constructor(
        readonly server: Elysia,
        useCase: RegisterUser,
    ) {
        server.post("/users", async ({body, set}) => {
            const {name, email, password} = body;

            await useCase.execute({ name, email, password});

            set.status = 201;

            return {
                ok: true,
                code: 201,
                message: "User created successfully."
            }
        }, {
            body: t.Object({
                name: t.String(),
                email: t.String(),
                password: t.String(),
            })
        });
    }
}
