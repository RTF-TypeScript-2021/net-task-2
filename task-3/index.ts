/**
 * Задание 3
 *
 * С помощью предыдущих моделей запроси рандомный факт о котиках
 */

import fetch from "node-fetch";
import {CatFactResponseModel} from "../task-2";

export async function getCatFact(): Promise<CatFactResponseModel> {
    const answer = await fetch("https://catfact.ninja/fact");
    if (answer.ok){
        return await answer.json() as CatFactResponseModel
    }
    throw new Error();
}
