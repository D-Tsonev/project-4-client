import React from 'react'
import { Link, useHistory, useLocation } from 'react-router-dom'
import { isAuthenticated, removeToken, getUserId } from '../../lib/auth'


function Nav() {
  const location = useLocation()
  const history = useHistory()
  const isLoggedIn = isAuthenticated()
  const [isOpen, setIsOpen] = React.useState(false)

  const handleToggle = () => {
    setIsOpen(!isOpen)
  }

  const handleLogout = () => {
    removeToken()
    history.push('/')
  }

  React.useEffect(() => {
    setIsOpen(false)
  }, [location.pathname])

  
  return  (
    <nav className="navbar is-dark">
      <div className="container">
        <div className="navbar-brand">
          <Link to="/" className="navbar-item">
          Home
          </Link>
          <span
            className={`navbar-burger ${isOpen ? 'is-active' : ''}`}
            aria-label="menu"
            aria-expanded="false"
            onClick={handleToggle}
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </span>
        </div>
        <div className={`navbar-menu ${isOpen ? 'is-active' : ''}`}>
          <div className="navbar-start">
            <Link to="/instruments" className="navbar-item">
              Instruments
            </Link>
            <Link to="/search" className="navbar-item">
              Find a Teacher
            </Link>
          </div>
          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                {!isLoggedIn ?
                  <>
                    <Link to="/register" className="button is-light">
                  Register
                    </Link>
                    <Link to="/login" className="button is-light">
                  Log In
                    </Link>
                    
                  </>
                  :
                  <>
                    <button
                      className="button is-light"
                      onClick={handleLogout}
                    >
                  Logout
                    </button>
                    <Link to={`/profile/${getUserId()}`} className="button is-light">
                      My profile
                    </Link>
                  </>
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Nav
