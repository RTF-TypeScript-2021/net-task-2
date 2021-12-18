/**
 * Задание 3
 *
 * С помощью предыдущих моделей запроси рандомный факт о котиках
 */
import {CatFactResponseModel} from "../task-2/index";
import fetch from "node-fetch";

export async function getCatFact(): Promise<CatFactResponseModel> {
    const url = "https://catfact.ninja/fact";

    const answer = await fetch(url);
    if (!answer.ok) {
        throw new Error('Error');
    }
        
    return await answer.json() as CatFactResponseModel;           
}
