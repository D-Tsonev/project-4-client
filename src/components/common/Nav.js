import { Link } from 'react-router-dom'

function Nav() {
  return (
    <nav className="navbar is-blue">
      <div className="container">
        <div className="navbar-brand">
          <Link to="/" className="navbar-item">
            Home
          </Link>
          <Link to="/instruments" className="navbar-item">
            Instruments
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Nav