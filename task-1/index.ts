// В проекте, походу, конфиги поломаны, компилятор указывает на папку src, которой нет в проекте, + компилируется не модульный ES
// Поменял в tsconfig module на es6, добавил moduleResolution node и в package.json установил type на module
// Иначе не подключается node-fetch, который работает только на esm
// Хз, может это только у меня такие проблемы
import fetch from 'node-fetch'
import { GithubEndPointData } from './endpoint';

/**
 * Проверяет существование пользователя на GH
 * @param username - юзернейм
 */
export async function isUserExist(username: string): Promise<boolean> {
    return (await fetch(`https://api.github.com/users/${username}`)).ok;
}

export async function getUserData(username: string): Promise<GithubEndPointData> {
    let resp = await fetch(`https://api.github.com/users/${username}`);

    if (resp.ok) {
        return await resp.json() as GithubEndPointData;
    }

    throw new Error(`Cant get correct data: ${resp.statusText}`);
}


// isUserExist('DEFLIK').then(resp => console.log('DEFLIK:', resp)); // true
// isUserExist('###').then(resp => console.log('###:', resp)); // false
// getUserData('DEFLIK').then(data => console.log(data));