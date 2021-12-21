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
    const response = await fetch(`https://api.github.com/users/${username}`)
    if(response.ok){
        const user = <IPublicGitHubUser> await response.json();
        console.log(user.name);

        return true;
    } else {
        return false;
    }
}

interface IPublicGitHubUser{
    "login": string;
    "id": number;
    "node_id": string;
    "avatar_url": string;
    "gravatar_id": string;
    "url": string;
    "html_url": string;
    "followers_url": string;
    "following_url": string;
    "gists_url": string;
    "starred_url": string;
    "subscriptions_url": string;
    "organizations_url": string;
    "repos_url": string;
    "events_url": string;
    "received_events_url": string;
    "type": string;
    "site_admin": boolean;
    "name": string;
    "company": string;
    "blog": string | null;
    "location": string | null;
    "email": string | null;
    "hireable": string;
    "bio": string | null;
    "twitter_username": string | null;
    "public_repos": number;
    "public_gists": number;
    "followers": number;
    "following": number;
    "created_at": string;
    "updated_at": string
  }