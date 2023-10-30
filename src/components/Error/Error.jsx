import '../../styles/error.css'
import { NavLink } from 'react-router-dom'

function Error() {
  return (
    <section className="error-page">
      <h1 className="title">404</h1>
      <div className="description">
        Oups! La page que vous demandez n'existe pas.
      </div>
      <nav className="return-main">
        <NavLink to="/">Retourner sur la page d’accueil</NavLink>
      </nav>
    </section>
  )
}

export default Error
