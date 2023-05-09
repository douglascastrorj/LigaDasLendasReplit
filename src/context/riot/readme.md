#ler api riot

request

https://br1.api.riotgames.com/lol/summoner/v4/summoners/by-name/merkuriosensei

response
{
    "id": "12sARP0rqbIbD8sdzWh_l9ABvFyMl975rLF9hijeX3gYIQ",
    "accountId": "9mRNLh3i_cjXjI-caaW-qGaUABCtCAZ_OLALkA8zWggQUsY",
    "puuid": "sLY7mbRNVbgnqLC1CwwIq6hQii0UBXrK6v8wmTtTwIluwN1Wrg1WAf41JDcN3Eqm93TNVrZZDCf7vA",
    "name": "Merkurio Sensei",
    "profileIconId": 5736,
    "revisionDate": 1683589173059,
    "summonerLevel": 203
}


request // passando o id do response anterior

https://br1.api.riotgames.com/lol/league/v4/entries/by-summoner/12sARP0rqbIbD8sdzWh_l9ABvFyMl975rLF9hijeX3gYIQ

response

[
    {
        "leagueId": "89649b9f-7dbd-4982-8f09-8ecfbf87cc0a",
        "queueType": "RANKED_SOLO_5x5",
        "tier": "PLATINUM",
        "rank": "IV",
        "summonerId": "12sARP0rqbIbD8sdzWh_l9ABvFyMl975rLF9hijeX3gYIQ",
        "summonerName": "Anti Pit",
        "leaguePoints": 1,
        "wins": 27,
        "losses": 32,
        "veteran": false,
        "inactive": false,
        "freshBlood": false,
        "hotStreak": false
    },
    {
        "leagueId": "b32d79ae-2f75-47be-8b10-44a78e0c65bb",
        "queueType": "RANKED_FLEX_SR",
        "tier": "PLATINUM",
        "rank": "II",
        "summonerId": "12sARP0rqbIbD8sdzWh_l9ABvFyMl975rLF9hijeX3gYIQ",
        "summonerName": "Merkurio Sensei",
        "leaguePoints": 5,
        "wins": 17,
        "losses": 20,
        "veteran": false,
        "inactive": false,
        "freshBlood": false,
        "hotStreak": false
    }
]

request puiid vem na primeira response

https://americas.api.riotgames.com/lol/match/v5/matches/by-puuid/sLY7mbRNVbgnqLC1CwwIq6hQii0UBXrK6v8wmTtTwIluwN1Wrg1WAf41JDcN3Eqm93TNVrZZDCf7vA/ids?start=0&count=20

response -- array de match ids

[
    "BR1_2726897139",
    "BR1_2726846938",
    "BR1_2726065538",
    "BR1_2726048617",
    "BR1_2725644625",
    "BR1_2725622400",
    "BR1_2725587348",
    "BR1_2725556761",
    "BR1_2725541075",
    "BR1_2725516940",
    "BR1_2725498651",
    "BR1_2725467876",
    "BR1_2725435823",
    "BR1_2725419541",
    "BR1_2725396041",
    "BR1_2723665910",
    "BR1_2723650919",
    "BR1_2723632739",
    "BR1_2723238893",
    "BR1_2723228783"
]


request 

https://americas.api.riotgames.com/lol/match/v5/matches/BR1_2726897139

response

se encontra no arquivo match.json
