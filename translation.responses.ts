import { GenericResponse } from "./basic.response.types"

export type Translations = {
    [key: string]: string;
};

export type GetTranslationsResponse = GenericResponse<Translations>;

export enum TranslationResponsePaths {
    GetTranslations = "/Translation/",
}