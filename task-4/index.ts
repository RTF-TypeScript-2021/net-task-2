import {TranslateRequestModel, CatFactResponseModel, TranslateResponseModel} from "../task-2";
import fetch from "node-fetch";
/**
 * Задание 4
 *
 * Так как мы получаем факты о котиках на непонятном языке,
 * давай переведем их на русский))
 */

export async function translateCatFact(fact: CatFactResponseModel): Promise<TranslateResponseModel>{
    let request = {
        q: "w",
        source: "auto",
        target: "ru",
        format: "text"
    } as TranslateRequestModel
    let response = await fetch(String(request))
    return response.text() as Promise<TranslateResponseModel>
}
