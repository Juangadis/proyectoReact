import { Link, NavLink } from "react-router-dom"

const Nav = () => {
  return (
    <nav className="nav">
        <NavLink to="/categoria/clothing" className="nav__link">Clothing</NavLink>
        <NavLink to="/categoria/2" className="nav__link">link 2</NavLink>
        <NavLink to="/categoria/3" className="nav__link">link 3</NavLink>
    </nav>
  )
}

export default Nav