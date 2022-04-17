import { Link, NavLink } from "react-router-dom"

const Nav = () => {
  return (
    <nav className="nav">
        <NavLink to="/categoria/clothing" className="nav__link">Ropa</NavLink>
        <NavLink to="/categoria/jewelery" className="nav__link">Joyería</NavLink>
        <NavLink to="/categoria/electronics" className="nav__link">Electrónica</NavLink>
    </nav>
  )
}

export default Nav