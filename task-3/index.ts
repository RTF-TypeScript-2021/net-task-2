/**
 * Задание 3
 *
 * С помощью предыдущих моделей запроси рандомный факт о котиках
 */
import fetch from "node-fetch";
import {CatFactResponseModel} from "../task-2";

export async function getCatFact(): Promise<CatFactResponseModel>{
    let request = await fetch("https://catfact.ninja/fact");
    if(request.ok){
        return await request.json() as CatFactResponseModel;
    } else {
        throw new Error("Something is not working");
    }
}
