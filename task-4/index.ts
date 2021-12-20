/**
 * Задание 4
 *
 * Так как мы получаем факты о котиках на непонятном языке,
 * давай переведем их на русский))
 */
import {CatFactResponseModel, TranslateRequestModel, TranslateResponseModel} from "../task-2";
import fetch from "node-fetch";

export async function translateCatFact(fact: CatFactResponseModel): Promise<TranslateResponseModel>{
    const request: TranslateRequestModel = {
        q: fact.fact,
        source: "en",
        target: "ru",
        format: "text"
    }
    let result = await fetch("https://trans.zillyhuhn.com/translate", {
        method: "POST",
        body: JSON.stringify(request),
        headers: { "Content-Type": "application/json" }
    });
    if(result.ok){
        return await result.json() as TranslateResponseModel;
    } else {
        throw new Error("Something is not working");
    }
}

// Жили-были три китайца:
// Як, Як-Цидрак, Як-Цидрак-Цидрони
// Жили-были три китайки:
// Ципа, Ципа-Дрипа, Ципа-Дрипа-Лам-Помпони.
//
// Вот они переженились:
// Як на Ципе,
// Як-Цидрак на Ципе-Дрипе,
// Як-Цидрак-Цидрони на Ципе-Дрипе-Лам-Помпони.
//
// Родились у них детишки:
// У Яка с Ципой Шах,
// У Як-Цидрака с Ципой-Дрипой Шах-Шарах,
// У Як-Цидрак-Цидрони с Ципой-Дрипой-Лимпомпоне Шах-Шарах-Шароне...
