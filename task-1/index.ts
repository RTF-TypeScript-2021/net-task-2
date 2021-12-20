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
export async function isUserExist(username: string): Promise<boolean> {
    const url = `https://api.github.com/users/${username}`;
    const response = await fetch(url);
    if (response.ok) {
        return true;
    }
    if (response.status == 404) {
        return false;
    }
    throw new Error(`Something went wrong. ${response.statusText}`);
}
