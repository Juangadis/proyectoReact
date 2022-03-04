import CartWidget from "./CartWidget"
import Nav from "./Nav"

const NavBar = () => {
  return (
    <header className="header">
        <h1>Mi Tienda</h1>
        <CartWidget/>
        <Nav />
    </header>
  )
}

export default NavBar