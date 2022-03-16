/* import React from 'react' */
import NavBar from './NavBar'
import ItemListContainer from './ItemListContainer'
import Footer from './Footer'
import ItemDetailContainer from './ItemDetailContainer'

const App = () => {
  return (
    <>
        <NavBar/>
        <ItemListContainer nombre="Juan" edad="23"/>
        <ItemDetailContainer/>
        <Footer/>
    </>
  )
}

export default App