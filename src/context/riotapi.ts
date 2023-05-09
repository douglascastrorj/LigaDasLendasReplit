const api_summoner_v4 = 'https://br1.api.riotgames.com/lol/summoner/v4';
const api_league_v4 = 'https://br1.api.riotgames.com/lol/league/v4';

export function getSummonerByName(api_key: string, summoner_name: string) {
    return fetch(`${api_summoner_v4}/summoners/by-name/${summoner_name}?api_key=${api_key}`);
}

export function getEntriesBySummoner(api_key: string, encrypted_summoner_id: string) {
    return fetch(`${api_league_v4}/entries/by-summoner/${encrypted_summoner_id}?api_key=${api_key}`);
}
