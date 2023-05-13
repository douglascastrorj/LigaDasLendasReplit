const api_summoner_v4 = 'https://br1.api.riotgames.com/lol/summoner/v4';
const api_league_v4 = 'https://br1.api.riotgames.com/lol/league/v4';


const api_key = 'RGAPI-d037c10a-5d55-4ae6-9e6a-4d588a46fea8';

export function getSummonerByName(summoner_name: string) {
  return fetch(`${api_summoner_v4}/summoners/by-name/${summoner_name}?api_key=${api_key}`).then((response) => {
    return response.json();
  });
}

export function getEntriesBySummoner(encrypted_summoner_id: string) {
  return fetch(`${api_league_v4}/entries/by-summoner/${encrypted_summoner_id}?api_key=${api_key}`).then((response) => {
    return response.json();
  });
}
