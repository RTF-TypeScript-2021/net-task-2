import fetch from "node-fetch";

/**
 * Задание - 1
 * Напишите функцию, которая проверяет наличие пользователя на площадке Github используя fetch
 * Данные что приходят с сервера нужно типизировать.
 */

interface ResponseGithubData {
    login: string,
    id: number,
    node_id: string,
    avatar_url: string,
    gravatar_id: number,
    url: string,
    html_url: string,
    followers_url: string,
    following_url: string,
    gists_url: string,
    starred_url: string,
    subscriptions_url: string,
    organizations_url: string,
    repos_url: string,
    events_url: string,
    received_events_url: string,
    type: string,
    site_admin: boolean,
    name: string,
    company: string,
    blog: string,
    location: string
    email: string,
    hireable: boolean,
    bio: string,
    twitter_username: string,
    public_repos: number,
    public_gists: number,
    followers: number,
    following: number,
    created_at: Date,
    updated_at: Date,
    private_gists: number,
    total_private_repos: number,
    owned_private_repos: number,
    disk_usage: number,
    collaborators: number,
    two_factor_authentication: boolean,
    plan: Plan
}

export interface Plan {
    name: string;
    space: number;
    private_repos: number;
    collaborators: number;
}


/**
 * Проверяет существование пользователя на GH
 * @param username - юзернейм
 */
export async function isUserExist(username: string): Promise<boolean> {
    const response = await fetch(`https://api.github.com/users/${username}`);
    const data = response.ok ? await response.json() as ResponseGithubData : undefined;

    return !!data;
}
