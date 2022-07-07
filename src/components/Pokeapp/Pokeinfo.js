const Pokeinfo = ({ data }) => {
  // console.log(data);
  return (
    <>
      {(!data) ? '' : (
        <>
          {/* Nombre del Pokemon */}
          <h1>{data.name} N.º {data.id}</h1>
          {/* Imagen del Pokemon */}
          <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${data.id}.png`} alt="" />
          {/* Habilidades del Pokemon */}
          <div className="habilidades">
            {
              // Crea un grupo de habilidad por cada habilidad que tenga el pokemon
              data.abilities.map(poke => {
                return(
                  <>
                    <div className="grupo">
                      <h2>{poke.ability.name}</h2>
                    </div>
                  </>
                )
              })
            }
          </div>
          {/* Stats del Pokemon */}
          <div className="stat-base">
            {
              // Crea un span con un stat del pokemon por cada stat que tenga
              data.stats.map(poke => {
                return(
                  <>
                    <span>{poke.stat.name}:{poke.base_stat}</span>
                  </>
                )
              })
            }
          </div>
        </>
      )}
    </>
  )
}

export default Pokeinfo;