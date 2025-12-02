import { Link, NavLink } from 'react-router-dom'
import './navbar.css'

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="brand">
        <Link to="/">StudyHere</Link>
      </div>
      <div className="links">
        <NavLink to="/" end className={({isActive}) => isActive ? 'active' : ''}>
          Home
        </NavLink>
        <NavLink to="/history" className={({isActive}) => isActive ? 'active' : ''}>
          History
        </NavLink>
      </div>
    </nav>
  )
}
