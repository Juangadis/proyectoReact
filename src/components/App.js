/* import React from 'react' */
import NavBar from './NavBar'
import ItemListContainer from './ItemListContainer'
import Footer from './Footer'

const App = () => {
  return (
    <>
        <NavBar/>
        <ItemListContainer nombre="Juan" edad="23"/>
        <Footer/>
    </>
  )
}

export default App