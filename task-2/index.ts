export interface CatFactResponseModel {
    fact: string;
    length: number;
}

export interface TranslateRequestModel {
    q: string;
    source: string;
    target: string;
    format?: "text" | "html";
    api_key?: string;
}

export interface TranslateResponseModel {
    translatedText?: string;
    error?: string;
}
