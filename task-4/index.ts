/**
 * Задание 4
 *
 * Так как мы получаем факты о котиках на непонятном языке,
 * давай переведем их на русский))
 */

import fetch from "node-fetch";
import {CatFactResponseModel, TranslateRequestBody, TranslateRequestModel, TranslateResponseModel} from "../task-2";

export function translateCatFact(fact: CatFactResponseModel): Promise<TranslateResponseModel> {
    const requestBody: TranslateRequestBody = {
        format: "text", q: fact.fact, source: "en", target: "ru"
    }
    const request: TranslateRequestModel = {
        method: "Post",
        body: JSON.stringify(requestBody),
        headers: {"Content-Type": "application/json"},
    };

    return fetch('https://trans.zillyhuhn.com/translate', request)
        .then((response) => response.json() as TranslateResponseModel);
}
