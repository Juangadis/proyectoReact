/* import React from 'react' */
import NavBar from './NavBar'
import ItemListContainer from './ItemListContainer'
import Footer from './Footer'
import ItemDetailContainer from './ItemDetailContainer'
import { BrowserRouter } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import  'react-toastify/dist/ReactToastify.css' ;
import MiProvider from '../contexto/CartContext'


const App = () => {
  return (
    <BrowserRouter>
      <MiProvider>
        <NavBar/>
        <ItemListContainer nombre="Juan" edad="23"/>
      </MiProvider>
      <Footer/>
      <ToastContainer/>
    </BrowserRouter>
  )
}

export default App