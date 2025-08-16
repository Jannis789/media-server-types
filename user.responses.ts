import { GenericResponse } from "./basic.response.types";


export type CreateUserResponse = GenericResponse<{
    session: string;
    role: string;
    expiresAt: Date;
}>;

export type LoginUserResponse = GenericResponse<{
    session: string;
    expiresAt: Date;
}>;

export enum UserResponsePaths {
    CreateUser = "/User/register",
    LoginUser = "/User/login",
}