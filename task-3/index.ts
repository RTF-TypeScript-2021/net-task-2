import fetch from 'node-fetch';
import { CatFactResponseModel } from '../task-2';

export async function getCatFact(): Promise<CatFactResponseModel>{
    let resp = await fetch('https://catfact.ninja/fact');

    if (resp.ok) {
        return await resp.json() as CatFactResponseModel;
    }

    throw new Error(`Cant get correct response: ${resp.statusText}`);
}

// getCatFact().then(resp => console.log(resp));