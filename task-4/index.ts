/**
 * Задание 4
 *
 * Так как мы получаем факты о котиках на непонятном языке,
 * давай переведем их на русский))
 */
import fetch, {RequestInit} from "node-fetch";
import {CatFactResponseModel, Language, TranslateRequestModel, TranslateResponseModel} from "../task-2";

export async function translateCatFact(fact: CatFactResponseModel): Promise<TranslateResponseModel> {
    const url = "https://trans.zillyhuhn.com/translate";
    const body: TranslateRequestModel = {
        q: fact.fact,
        source: Language.English,
        target: Language.Russian
    };
    const rData: RequestInit = {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {"Content-Type": "application/json"},
    };
    const response = await fetch(url, rData);

    if (response.ok) {
        return await response.json() as TranslateResponseModel;
    }
    throw new Error(`Something went wrong. ${response.statusText}`);
}
