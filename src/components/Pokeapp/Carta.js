const Carta=({pokemon,loading, infoPokemon})=>{
  // console.log(pokemon);
  return(
    <>
    {loading ? <h1>Loading...</h1>:
      pokemon.map((item) => {
        return(
          <>
            {/* Al clickearlo, muestra la informacion del pokemon en el contenido derecho */}
            <div className="carta" key = {item.id} onClick = {()=>infoPokemon(item)}>
              {/* Numero del Pokemon */}
              <h2>{item.id}</h2>
              {/* Imagen del Pokemon */}
              <img src={item.sprites.front_default} alt='Charmander'/>
              {/* Nombre del Pokemon */}
              <h2>{item.name}</h2>
            </div>
          </>
        )
      })
    }
    </>
  )
}

export default Carta;