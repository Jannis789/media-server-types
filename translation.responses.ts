import { GenericResponse } from "./basic.response.types"

export type GetTranslationsResponse = GenericResponse<{
    [key: string]: string;
}[]>;

export enum TranslationResponsePaths {
    GetTranslations = "/Translation/",
}