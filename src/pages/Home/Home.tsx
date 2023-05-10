import { useEffect, useState } from 'react'
import './Home.css'
import { getSummonerByName } from '../../context/riotapi.ts';
import { Button, TextField } from '@material-ui/core';
//https://v4.mui.com/components/popover/

export default function Home() {

  const [name, setName] = useState('');
  const [summoner, setSummoner] = useState({});

  useEffect(() => {
    document.title = 'Liga das Lendas React ⚛️';
  }, []);

  const fetchSummonerByName = async (name: string) => {
    getSummonerByName(name).then((response: any) => {
      console.log(response);
      setSummoner(response);
    });
  }

  const handleChange = (event: any) => {
    setName(event.target.value);
  }

  const handleSubmit = (event: any) => {
    fetchSummonerByName(name);
    event.preventDefault();
  }

  return (
    <main>
      <span class="title"> Liga das Lendas React </span>

      <div class="form">
        {/* <input class="search" type="text" onChange={handleChange} /> */}
        <TextField id="standard-basic" variant="outlined"  onChange={handleChange} />
        <Button variant="contained" color="primary" onClick={handleSubmit}> Buscar </Button>
      </div>

        { summoner.id ? 
        (
          <div>
            <pre>{JSON.stringify(summoner, null, 2) }</pre>
            <span class="vermelho"> {summoner.name} </span>
          </div>
        ) : null
      }
      
    </main>
  )
}