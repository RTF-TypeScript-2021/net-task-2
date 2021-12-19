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
export const isUserExist = (username: string): Promise<boolean> =>
    fetch(`https://api.github.com/users/${username}`)
        .then(response => response.ok);
