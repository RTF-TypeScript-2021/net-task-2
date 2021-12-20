import fetch from "node-fetch";
import {CatFactResponseModel} from "../task-2";

/**
 * Задание 3
 *
 * С помощью предыдущих моделей запроси рандомный факт о котиках
 */

export async function getCatFact(): Promise<CatFactResponseModel>{
    let url = "https://catfact.ninja/fact"
    let response = await fetch(url)
    return await response.json() as CatFactResponseModel
}
