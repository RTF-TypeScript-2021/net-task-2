import RequestInit from "node-fetch";

/**
 * Задание 2
 * Если кратко то вам нужно будет описать модели для данных отправляемых/получаемых со следующих источников:
 * catfact.ninja
 * https://trans.zillyhuhn.com
 *
 * Опишите следующие структуры данных:
 * CatFactResponseModel - Ответ от реста /fact
 * --- trans ---
 * TranslateRequestModel - Запрос на сервер /translate
 * TranslateResponseModel - Ответ с сервера
 */

export interface CatFactResponseModel {
    fact: string;
    length: number;
}

export enum Language {
    English = 'en',
    Arabic = 'ar',
    Chinese = 'zh',
    Dutch = 'nl',
    Finnish = 'fi',
    French = 'fr',
    German = 'de',
    Hindi = 'hi',
    Hungarian = 'hu',
    Indonesian = 'id',
    Irish = 'ga',
    Italian = 'it',
    Japanese = 'ja',
    Korean = 'ko',
    Polish = 'pl',
    Portuguese = 'pt',
    Russian = 'ru',
    Spanish = 'es',
    Swedish = 'sv',
    Turkish = 'tr',
    Ukranian = 'uk',
    Vietnamese = 'vi',
}


export interface TranslateRequestModel {
    q: string;
    source: Language;
    target: Language;
    format?: 'text' | 'html';
    api_key?: string;
}

export interface TranslateResponseModel {
    translatedText: string;
}