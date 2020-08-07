import React, { useState, useEffect, FormEvent } from 'react';
import api from '../../services/api';

import PokeCard from '../../PokeCard';

interface PokemonTypes {
  id: number;
  name: string;
  types: [{
    type: {
      name: string;
    };
  }];
  stats: [{
    base_stat: number;
    stat: {
      name: string;
    };
    }];
  sprites: {
    front_default: string;
  };
}

const Pokemon: React.FC = () => {
  const [pokemon, setPokemon] = useState<PokemonTypes | null>(null);

  useEffect(() => {
    api.get('pokemon/1').then(response => {
      setPokemon(response.data);
    });
  }, []);

  return (
    <>
      {pokemon && (
        <PokeCard
          id={pokemon.id}
          name={pokemon.name}
          types={pokemon.types}
          stats={pokemon.stats}
          sprites={pokemon.sprites}
        />
      )}
    </>
  );
};
export default Pokemon;
