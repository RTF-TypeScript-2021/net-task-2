/**
 * Задание - 1
 * Напишите функцию, которая проверяет наличие пользователя на площадке Github используя fetch
 * Данные что приходят с сервера нужно типизировать.
 */
import fetch from "node-fetch";

/**
 * Проверяет существование пользователя на GH
 * @param username - юзернейм
 */
export async function isUserExist(username: string): Promise<boolean> {
    const url = `https://api.github.com/users/${username}`;
    
    return await fetch(url).then(response => response.ok);
}
