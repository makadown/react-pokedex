import React from 'react';
import './styles/DetailView.css';

/* Se obtiene el pokemon de los argumentos */
const DetailView = ({ pokemon }) => {
    let { id, name, sprite, type, base_experience, height, weight } = pokemon;
    if (!sprite) {
        sprite = 'http://www.cnij.com/wp-content/uploads/2018/09/not-available.jpg';
        base_experience = 0;
        height = 0;
        weight = 0;
    }
    console.log(sprite);
    return (
        <section className="detail-view">
            <img src={sprite} className='sprite-image' alt="sprite" />
            <div className='data-wrapper mb-5'>
                <h1 className='data-name'>ID: {id} {name}</h1>
                <p className="data-char">Type: {type}</p>
                <p className="data-char">Base Exp: {base_experience} xp </p>
                <p className="data-char">Height: {height / 10} m </p>
                <p className="data-char">Weight: {weight / 10} kg</p>
            </div>
            <div class="alert alert-primary data-wrapper" role="alert">
                <p>
                    Aprendiendo ReactJS. 
                </p>
                <p>
                    Enero 2019. Hecho por Mario Arturo Serrano Flores en VS Code auxiliado 
                    con GitKraken para control de versiones.
                </p>
                <p>
                Basado en la guía 
                <i> "Let’s Build a Pokedex with React"</i> de <a rel="noopener noreferrer" href="https://blog.cloudboost.io/lets-build-a-pokedex-with-react-part-1-e1ba0b9387a7" target="_blank">
                    Juan Diego Jiménez</a>.
                </p>
            </div>
        </section>
    )
}

export default DetailView;