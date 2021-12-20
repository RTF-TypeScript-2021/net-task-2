/**
 * Задание 4
 *
 * Так как мы получаем факты о котиках на непонятном языке,
 * давай переведем их на русский))
 */

import fetch from "node-fetch";
import { CatFactResponseModel, TranslateRequestModel, TranslateResponseModel } from "../task-2";

export async function translateCatFact(fact: CatFactResponseModel): Promise<TranslateResponseModel>{
    const request: TranslateRequestModel = {
        q: fact.fact,
        source: "en",
        target: "ru",
        format: "text"
    };
    const response = await fetch(`http://trans.zillyhuhn.com/translate`, {
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify(request)
    });

    return await response.json() as TranslateResponseModel;
}
