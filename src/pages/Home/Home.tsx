import { useEffect, useState } from 'react'
import './Home.css'
import { getSummonerByName, getEntriesBySummoner } from '../../context/riotapi';
import { Button, TextField } from '@material-ui/core';
import { useNavigate } from 'react-router-dom';
//https://v4.mui.com/components/popover/

export default function Home() {

  const [name, setName] = useState('');
  const [summoner, setSummoner] = useState({});
  const [entries, setEntries] = useState([]);

  let navigate = useNavigate();

  useEffect(() => {
    document.title = 'Liga das Lendas React ⚛️';
  }, []);

  const fetchSummonerByName = async (summonerName: string) => {
    getSummonerByName(summonerName).then((summoner: any) => {
      setSummoner(summoner);
      fetchEntriesBySummonerId(summoner.id)
    });
  }

  const fetchEntriesBySummonerId = async (id: string) => {
    getEntriesBySummoner(id).then((response: any) => {
      console.log('Entries: ',response);
      setEntries(response);
    });
  }

  const handleChange = (event: any) => {
    setName(event.target.value);
  }

  const handleSubmit = (event: any) => {
    fetchSummonerByName(name);
    event.preventDefault();
  }

  const goToSummonerPage = () => {
    navigate('/summoner')
  }

  const renderEntry = (entry) => {
    if(!entry) return null;
    let winRate = entry.wins / (entry.wins + entry.losses)
    winRate = winRate * 100

    let queueType = 'Ranqueada Solo';
    if(entry.queueType == 'RANKED_FLEX_SR') queueType = 'Ranqueada Flexível';

    const eloImage = `src/assets/images/icons-elo/${entry.tier.toLowerCase()}.png`
    return (
      <>
        <div>
          <span>
            {entry.tier} {entry.rank} - 
            {entry.leaguePoints} LP
            {queueType}
            Win {entry.wins}
            lose {entry.losses}
            winrate {Math.round(winRate)}%
          </span>
          <div class="elo">
            <img width="80px" src={eloImage} />
          </div>
        </div>
      </>
    )
  }

  return (
    <main>
      <span class="title"> Liga das Lendas React </span>

      <div class="form">
        {/* <input class="search" type="text" onChange={handleChange} /> */}
        <TextField id="standard-basic" variant="outlined" onChange={handleChange} />
        <Button variant="contained" color="primary" onClick={handleSubmit}> Buscar </Button>

        <Button variant="contained" color="primary" onClick={goToSummonerPage}> Ir para outra pagina </Button>
      </div>

      {/* {summoner.id ?
        (
          <div>
            <pre>{JSON.stringify(summoner, null, 2)}</pre>
            <span class="vermelho"> {summoner.name} </span>
          </div>
        ) : null
      } */}

      {
        entries.map(entry => renderEntry(entry))
      }

    </main>
  )
}