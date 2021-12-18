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
    fact: string,
    length: number;
}

export interface TranslateRequestModel {
    method: string,
    body: string,
    headers: {"Content-Type": string}
}

export interface TranslateResponseModel {
    translatedText: string;
}
