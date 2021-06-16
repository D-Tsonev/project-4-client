import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

// import Nav from './components/common/Nav'
// import Home from './components/common/Home'
// import Footer from './components/common/Footer'
// import instrumentIndex from './components/instruments/InstrumentsIndex'
import Register from './components/auth/Register'
// import Login from './components/auth/Login'
// import Profile from './components/users/Profile'

function App() {
  return (
    <Router>
      {/* <Nav /> */}
      <Switch>
        {/* <Route exact path='/' component={Home} /> */}
        {/* <Route path='/instruments' component={instrumentIndex} /> */}
        {/* <Route path='/profile' component={Profile} /> */}
        <Route path='/register' component={Register} /> 
        {/* <Route path='/login' component={Login} /> */}
        {/* <Route path='/footer' component={Footer} /> */}
      </Switch>
    </Router>
  )
}


export default App


