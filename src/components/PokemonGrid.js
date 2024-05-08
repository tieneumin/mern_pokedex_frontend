import React from "react";

function PokemonGrid(props) {
  const { pokemons, isLoading, isError } = props;
  /* INSTRUCTION: add a loading message when isLoading is true */
  if (isLoading) return <div>Loading...</div>;

  /* INSTRUCTION: add an error message when isError is true */
  if (isError) return <div>Something went wrong. Please try again later.</div>;

  return (
    <div className="pokemon-grid">
      {/* INSTRUCTION: if pokemons data is available, display the pokemons in a 3-columns grid. if not, display a "No pokemons found." message */}
      {pokemons.length > 0 ? (
        pokemons.map((p) => (
          <div key={p.name} className="pokemon-card">
            {/* <img src={p.image} /> */}
            <h3>{p.name}</h3>
            <p>Type: {p.type}</p>
            <p>Level: {p.level}</p>
          </div>
        ))
      ) : (
        <div>No Pokemons found.</div>
      )}
    </div>
  );
}

export default PokemonGrid;
