/**
 * Задание 4
 *
 * Так как мы получаем факты о котиках на непонятном языке,
 * давай переведем их на русский))
 */

import { CatFactResponseModel, TranslateRequestModel, TranslateResponseModel } from "../task-2";

export async function translateCatFact(fact: CatFactResponseModel): Promise<TranslateResponseModel>{
    const url = "https://trans.zillyhuhn.com/translate";
    const request: TranslateRequestModel = {
        method: "POST",
        body: JSON.stringify({
            q: fact.fact,
            source: "en",
            target: "ru",
            format: "text"
        }),
        headers: { "Content-Type": "application/json" }
    }
    const response = await fetch(url, request);
    if (!response.ok) {
        throw new Error();
    }
    
    return await response.json() as TranslateResponseModel;
}
