import fetch from "node-fetch"
import { TranslateRequestModel, CatFactResponseModel, TranslateResponseModel } from "../task-2"
/**
 * Задание 4
 *
 * Так как мы получаем факты о котиках на непонятном языке,
 * давай переведем их на русский))
 */

export async function translateCatFact(fact: CatFactResponseModel): Promise<TranslateResponseModel>{
    const requestBody: TranslateRequestModel = {
        q : fact.fact,
        source : "en",
        target : "ru",
        format : "text"
    }
    const response = await fetch("https://trans.zillyhuhn.com/translate",{
        method : 'POST',
        headers: { "Content-Type": "application/json" },
        body : JSON.stringify(requestBody),
    })
    if (response.ok){
        return <TranslateResponseModel> await response.json();

    } else {
        throw new Error("bad response")
    }
}
