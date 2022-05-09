import fetch from "node-fetch";
import {CatFactResponseModel} from "../task-2";

/**
 * Задание 3
 *
 * С помощью предыдущих моделей запроси рандомный факт о котиках
 */

export async function getCatFact(): Promise<CatFactResponseModel>{
    const url = "https://catfact.ninja/fact"
    const response = await fetch(url)
    return await response.json() as CatFactResponseModel
}
