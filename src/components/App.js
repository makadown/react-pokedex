import React, { Component } from 'react';
import PokeList from './PokeList';
import DetailView from './DetailView';
import Pokemon from '../Pokemon';
import './styles/App.css';

class App extends Component {
  constructor() {
    super();
    /* agregando llave al objeto de estado con el valor de un objeto vacío */
    this.state = {
      pokemon: {}
    };
    // haciendo bind del evento click a esta clase.
    this.handleOnClick = this.handleOnClick.bind(this);
  }


  handleOnClick(id) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
      .then(res => res.json())
      .then(data => {
        const pokemon = new Pokemon(data);
        /* Se pasa el valor del dato obtenido al estado para accesar a éste en el rendereado */
        this.setState({ pokemon });
      })
      .catch(err => console.log(err));
  }

  /* muy importante usar 'this'. Lo estaré repasando */
  render() {
    return (       
      <div className="App">
        <PokeList handleOnClick={this.handleOnClick} />
        <DetailView pokemon={this.state.pokemon} />
      </div>
    );
  }
}

export default App;