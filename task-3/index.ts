/**
 * Задание 3
 *
 * С помощью предыдущих моделей запроси рандомный факт о котиках
 */
import {CatFactResponseModel} from "../task-2";
import fetch from "node-fetch";

export function getCatFact(): Promise<CatFactResponseModel> {
    const url = "https://catfact.ninja/fact";
    
    return await fetch(url).then(response => response.json() as CatFactResponseModel);
}
