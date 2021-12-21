import fetch from "node-fetch";
import { CatFactResponseModel } from "../task-2";
/**
 * Задание 3
 *
 * С помощью предыдущих моделей запроси рандомный факт о котиках
 */

export async function getCatFact(): Promise<CatFactResponseModel>{
    const response = await fetch('https://catfact.ninja/fact');
    if (response.ok){        
        return <CatFactResponseModel> await response.json();
    } else {
        throw new Error("bad response")
    }
}
