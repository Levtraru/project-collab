import '../../stylesheets/pokeapp.css'
import axios from 'axios';
import Navbar from "../Navbar";
import Carta from './Carta';
import Pokeinfo from './Pokeinfo';
import { useEffect, useState } from 'react';

const Pokedex = () => {
  const [pokeData,setPokedata] = useState([]);
  const [loading,setLoading] = useState(true);
  const [url,setUrl] = useState('https://pokeapi.co/api/v2/pokemon/');
  const [nextUrl,setNextUrl] = useState();
  const [prevUrl,setPrevUrl] = useState();
  const [pokeDex,setPokeDex] = useState();

  const pokeFun = async () => {
    setLoading (true)
    const res = await axios.get(url);
    // console.log(res.data.results)
    setNextUrl(res.data.next);
    setPrevUrl(res.data.previous);
    getPokemon(res.data.results)
    setLoading(false)
    // console.log(pokeData)
  }

  const getPokemon = async (res) => {
    res.map(async(item) => {
      const result = await axios.get(item.url)
      // console.log(result.data)
      setPokedata(state => {
        state = [...state,result.data]
        state.sort((a,b) => a.id > b.id ? 1 : -1)
        return state;
      })
    })
  }
  useEffect(()=>{
    pokeFun();
  },[url])

  return(
    <>
      <Navbar/>
      <div className="poke-container">
        <div className="contenido-izq">
          <div className='btn-group'>
            {prevUrl && <button onClick={() => {
              setPokedata([])
              setUrl(prevUrl)
            }}>Anterior</button>}
            {nextUrl && <button onClick={() => {
              setPokedata([])
              setUrl(nextUrl)
            }}>Siguiente</button>}
          </div>
          <Carta
          pokemon = {pokeData}
          loading = {loading}
          infoPokemon = {poke => setPokeDex(poke)}/>
        </div>
        <div className="contenido-der">
          <Pokeinfo data = {pokeDex}/>
        </div> 
      </div>
    </>
  )
}

export default Pokedex;