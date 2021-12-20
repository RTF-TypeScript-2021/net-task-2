import fetch from "node-fetch";
/**
 * Задание - 1
 * Напишите функцию, которая проверяет наличие пользователя на площадке Github используя fetch
 * Данные что приходят с сервера нужно типизировать.
 */


/**
 * Проверяет существование пользователя на GH
 * @param username - юзернейм
 */
export async function isUserExist(username: string): Promise<boolean>{
    let url = `https://api.github.com/user/${username}`
    return await fetch(url).then(result => {
        return result.ok;
    })
}


