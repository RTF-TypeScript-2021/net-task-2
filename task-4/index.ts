import fetch from 'node-fetch';
import { CatFactResponseModel, TranslateResponseModel } from "../task-2";
// import { getCatFact } from '../task-3/index.js';

export async function translateCatFact(fact: CatFactResponseModel): Promise<TranslateResponseModel> {
    let resp = await fetch(`https://trans.zillyhuhn.com/translate`, {
        method: 'POST',
        body: JSON.stringify({
            q: fact.fact,
            source: 'en',
            target: 'ru'
        }),
        headers: { 'Content-Type': 'application/json' }
    });
    let ans = await resp.json() as TranslateResponseModel;

    if (resp.ok && !ans.error) {
        return ans;
    }

    throw new Error(`Wrong request: ${ans.error ? ans.error : resp.statusText}`);
}

// getCatFact().then(fResp => {
//     translateCatFact({fact: fResp.fact, length: fResp.length}).then(tResp => {
//         console.log(tResp);
//     });
// })