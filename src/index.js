import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

/* Básicamente, este archivo le dice al DOM que renderee el componente de la aplicación 
en el elemento con el id de "root". Nuestro componente de la aplicación contendrá 
todos nuestros componentes que vamos a construir. */
serviceWorker.unregister();


