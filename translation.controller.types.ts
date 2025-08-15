
// POST -> /Translation/:language_code
interface GetTranslationsResponse {
    status: number;
    messages: string[];
    data?: {
        key: string;
        value: string;
    }[];
}

enum TranslationPath {
    GetTranslations = "/Translation/",
}

export { GetTranslationsResponse, TranslationPath };