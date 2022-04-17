import { useContext } from "react"
import { Link } from "react-router-dom"
import { contexto } from "../contexto/CartContext"
import CartWidget from "./CartWidget"
import Nav from "./Nav"

const NavBar = () => {

  const {calcCantidad} = useContext(contexto)

  return (
    <header className="header">
        <Link to="/">
          <h1>TODO TIENDA</h1>
        </Link>
        <Nav/>
        <Link to="/carrito">
          <CartWidget/>
          { calcCantidad() > 0 ? calcCantidad() : " "}
        </Link>
    </header>
  )
}

export default NavBar