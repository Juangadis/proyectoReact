// 1) Necesitamos la variable React en Scope

import React from 'react'
//Esta libreria me permite es hacer toda la estructura, es decir, hacer los componentes, etc.

// 2) Necesitamos la variable ReactDOM en Scope

import ReactDOM from 'react-dom'
// Esta libreria es la que nos permite poder visualizar en el navegador por ejemplo todo el codigo que elaboramos en la libreria React. Agarra el codigo y lo inyecta en el DOM.

// 3) Necesitamos un componenete en scope 

/* function App (){
    return "Hola mundo!"
} */

/* const App = () => "Hola Mundo Flecha" */

import App from './components/App.js'
import './estilos.css'

// 4) Necesitamos poner el componente en el DOM 

ReactDOM.render(<App/>,document.getElementById("root"))