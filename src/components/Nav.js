import { Link } from "react-router-dom"

const Nav = () => {
  return (
    <nav className="nav">
        <Link to="/categoria/1" className="nav__link">link 1</Link>
        <Link to="/categoria/2" className="nav__link">link 2</Link>
        <Link to="/categoria/3" className="nav__link">link 3</Link>
    </nav>
  )
}

export default Nav