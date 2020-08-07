import React from 'react';

import { Header, Main, PokeInfo, Evolution } from './styles';

interface PokemonTypes {
  id: number;
  name: string;
  types: [
    {
      type: {
        name: string;
      };
    },
  ];
  stats: [
    {
      base_stat: number;
      stat: {
        name: string;
      };
    },
  ];

  sprites: {
    front_default: string;
  };
}

const PokeCard: React.FC<PokemonTypes | null> = ({
  id,
  name,
  types,
  stats,
  sprites,
}) => {
  return (
    <>
      <Header>
        <h1>{name}</h1>
        <div>
          {types.map(type => (
            <strong>{type.type.name}</strong>
          ))}
        </div>
      </Header>
      <Main>
        <PokeInfo>
          <img src={sprites.front_default} />
          <ul>
            {stats.map(stat => (
              <li>
              <span>{stat.stat.name}</span>
              <input type="range" value={stat.base_stat} />
              </li>
            ))}
          </ul>
          <div>
            <h1>#{id}</h1>
          </div>
        </PokeInfo>
        <strong>Seed Pokemon</strong>
        <span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuadipisicing
          elitadipisicing elitadipisicing elitadipisicing elit.
        </span>
        <Evolution>
          <strong>EVOLUTIONS</strong>
        </Evolution>
      </Main>
    </>
  );
};

export default PokeCard;
