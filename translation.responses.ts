import { GenericResponse } from "./basic.response.types"

export type GetTranslationsResponse = GenericResponse<{
    key: string;
    value: string;
}[]>;

