interface ApiResponseBase {
  status: number;
  message: string;
}

// Erfolg: hat Data
type ApiResponseSuccess<T> = ApiResponseBase & {
  success: true;
  data: T;
};

// Fehler: hat Error, auf Felder aufgeteilt
type ApiResponseError = ApiResponseBase & {
  success: false;
  error: {
    code: string;
    fields: {
      field: string;
      messages: string[];
    }[];
  };
};

export type GenericResponse<T> = ApiResponseSuccess<T> | ApiResponseError;
