/**
 * Задание 3
 *
 * С помощью предыдущих моделей запроси рандомный факт о котиках
 */
import {CatFactResponseModel} from "../task-2";
import fetch from "node-fetch";

export async function getCatFact(): Promise<CatFactResponseModel> {
    const maxSize = 200;

    return fetch(`https://catfact.ninja/fact?max_length=${maxSize}`)
        .then((response) => response.json() as unknown as CatFactResponseModel);
}
