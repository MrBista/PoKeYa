import React from 'react';

const ShowOffPokemon = ({ id }) => {
  return (
    <div className={`pokemon-${id} pokemon`}>
      <img src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png' />
    </div>
  );
};

export default ShowOffPokemon;
