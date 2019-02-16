import React from 'react';
import sprites from '../assets/sprites.png';
import './styles/PokeCell.css';

/* Desde los argumentos, aquí se deconstruye el handleOnClick */
const PokeCell = ({ pokeClass, handleOnClick }) => {
  const { id, backgroundPosition } = pokeClass;
  const style = { backgroundImage: `url(${sprites})`, backgroundPosition };
/* Se agrega evento onClick y se asigna función anonima que llama handleOnClick con el parametro 'id' */
  return <button onClick={() => handleOnClick(id)} style={style} className="poke-cell"></button>
};

export default PokeCell;