import fetch from "node-fetch";
import {CatFactResponseModel, TranslateResponseModel, TranslateRequestModel} from "../task-2";
/**
 * Задание 4
 *
 * Так как мы получаем факты о котиках на непонятном языке,
 * давай переведем их на русский))
 */

export async function translateCatFact(fact: CatFactResponseModel): Promise<TranslateResponseModel>{
    const url = "https://trans.zillyhuhn.com/translate";
    const requestMod: TranslateRequestModel = {
        q: fact.fact,
        source: "en",
		target: "ru",
		format: "text"
    }
    let res = await fetch(url, {
	method: "POST",
	body: JSON.stringify(requestMod),
	headers: { "Content-Type": "application/json" }
});


return await res.json() as TranslateResponseModel;
}

