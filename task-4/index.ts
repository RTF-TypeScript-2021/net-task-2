import {TranslateRequestModel, CatFactResponseModel, TranslateResponseModel} from "../task-2";
import fetch from "node-fetch";
/**
 * Задание 4
 *
 * Так как мы получаем факты о котиках на непонятном языке,
 * давай переведем их на русский))
 */

export async function translateCatFact(fact: CatFactResponseModel): Promise<TranslateResponseModel>{
    const url = "https://trans.zillyhuhn.com/translate";
    const requestBody = {
        q: "w",
        source: "auto",
        target: "ru",
        format: "text"
    } as TranslateRequestModel
    const response = await fetch(url, {
        method: "POST",
        body: JSON.stringify(requestBody),
        headers: {"Content-Type": "application/json"}
    })
    return await response.json() as TranslateResponseModel
}
