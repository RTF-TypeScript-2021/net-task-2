import {CatFactResponseModel} from "../task-2";
import fetch from "node-fetch";
/**
 * Задание 3
 *
 * С помощью предыдущих моделей запроси рандомный факт о котиках
 */

export async function getCatFact(): Promise<CatFactResponseModel>{
    let url = `https://catfact.ninja/fact`;
    let res = await fetch(url);
    if(res.ok){
        return await res.json() as CatFactResponseModel;
    }
}
