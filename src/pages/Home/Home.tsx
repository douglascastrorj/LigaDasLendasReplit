import { useEffect } from 'react'
import './Home.css'
import { getSummonerByName } from '../../context/riotapi.ts';

export default function Home() {

  useEffect(() => {
    document.title = 'Liga das Lendas React ⚛️';

    fetchSummonerByName('Merkurio Sensei');
  }, []);

  const fetchSummonerByName = async (name) => {
    getSummonerByName('RGAPI-82fb1f77-0e22-44ed-8f71-3b1640780c17', name).then((response) => {
      console.log(response);
    });
  }

  return (
    <main>
      Liga das Lendas React ⚛️
    </main>
  )
}