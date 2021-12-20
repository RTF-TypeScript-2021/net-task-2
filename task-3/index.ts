/**
 * Задание 3
 *
 * С помощью предыдущих моделей запроси рандомный факт о котиках
 */

import { CatFactResponseModel } from "../task-2";
import fetch from "node-fetch";

export async function getCatFact(): Promise<CatFactResponseModel>{
    const response = await fetch(`https://catfact.ninja/fact`, {
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'GET'
    });
    
    return await response.json() as CatFactResponseModel;
}
