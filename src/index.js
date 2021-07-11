import React from 'react'
import ReactDOM from 'react-dom';
import PrimeraApp from './PrimeraApp';
import CounterApp from './CounterApp';
//importamos el componente desde su archivo
import './index.css';
//una manera de importar css


const divRoot = document.querySelector('#app');


const divCounter = document.querySelector('#counterApp');


//agregamos el componente de esta manera, dejamos un espacio y cerramos con /
ReactDOM.render(<PrimeraApp saludo="Hola soy Haru!" />, divRoot);

ReactDOM.render(<CounterApp value={0} />, divCounter);


//esta se toma como la instancia padre del componente, lo detallado en el archivo mismo del componente, es un hijo de esta instancia