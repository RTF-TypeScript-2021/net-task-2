/**
 * Задание 3
 *
 * С помощью предыдущих моделей запроси рандомный факт о котиках
 */

import { CatFactResponseModel } from "../task-2";
import fetch from "node-fetch";

export async function getCatFact(): Promise<CatFactResponseModel>{
    const url = 'https://catfact.ninja/fact';
    const response = await fetch(url);
    if (response.ok) {
        return await response.json() as CatFactResponseModel;
    }
    
    throw new Error()
}
