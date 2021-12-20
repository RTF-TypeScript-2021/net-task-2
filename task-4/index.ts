/**
 * Задание 4
 *
 * Так как мы получаем факты о котиках на непонятном языке,
 * давай переведем их на русский))
 */
import {CatFactResponseModel, TranslateResponseModel} from "../task-2";
import fetch from "node-fetch";

export async function translateCatFact(fact: CatFactResponseModel): Promise<TranslateResponseModel>{
    const answer = await fetch("https://trans.zillyhuhn.com/translate", {
        method: "POST",
        body: JSON.stringify({
            q: fact.fact,
            source: "en",
            target: "ru",
            format: "text"
        }),
        headers: { "Content-Type": "application/json" }
    });
    if(answer.ok) {
        return await answer.json() as TranslateResponseModel;
    }
    throw new Error();
}
