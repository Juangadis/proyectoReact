import { Link } from "react-router-dom"
import CartWidget from "./CartWidget"
import Nav from "./Nav"

const NavBar = () => {
  return (
    <header className="header">
        <Link to="/">
          <h1>Mi Tienda</h1>
        </Link>
        <Link to="/carrito">
          <CartWidget/>
        </Link>
        <Nav />
    </header>
  )
}

export default NavBar