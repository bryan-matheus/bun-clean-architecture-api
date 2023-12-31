export default interface User {
    id?: number;
    name: string;
    email: string;
    password: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
}
