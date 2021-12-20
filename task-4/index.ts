/**
 * Задание 4
 *
 * Так как мы получаем факты о котиках на непонятном языке,
 * давай переведем их на русский))
 */

import fetch from "node-fetch";
import { CatFactResponseModel } from "../task-2";
import { TranslateRequestModel } from "../task-2";
import { TranslateResponseModel } from "../task-2";

export async function translateCatFact(fact: CatFactResponseModel): Promise<TranslateResponseModel>{
    const url = `https://trans.zillyhuhn.com/translate`;
    const options: TranslateRequestModel = {
        q: fact.fact,
        source: "en",
		target: "ru",
		format: "text"
    }
    const response = await fetch(url, {
        method: "POST",
        body: JSON.stringify(options),
        headers: { "Content-Type": "application/json" }
    });

    if (!response.ok) {
        throw new Error("Incorrect response");
    }

    return await response.json() as TranslateResponseModel;
}
