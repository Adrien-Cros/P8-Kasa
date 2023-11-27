import { NavLink } from 'react-router-dom'
import logo from '../../../assets/LOGO.png'
import '../../../styles/Sass/header.scss'

function Header() {
  return (
    <header className="header">
      <img className="logo" src={logo} alt="Logo du site Kasa" />
      <nav className="navbar">
        <NavLink to="/">Accueil</NavLink>
        <NavLink to="/about">A Propos</NavLink>
      </nav>
    </header>
  )
}

export default Header
