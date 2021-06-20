import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'


// import Footer from './components/common/Footer'
import Register from './components/auth/Register'
import Login from './components/auth/Login'
import Profile from './components/users/Profile'
import Home from './components/common/Home'
import Nav from './components/common/Nav'
import InstrumentsIndex from './components/instruments/InstrumentsIndex'
import InstrumentShow from './components/instruments/InstrumentShow'

function App() {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/profile/:id' component={Profile} />
        <Route path='/register' component={Register} /> 
        <Route path='/login' component={Login} />
        {/* <Route path='/footer' component={Footer} /> */}
        <Route path="/instruments/:id" component={InstrumentShow} />
        <Route path="/instruments" component={InstrumentsIndex} /> 
      </Switch>
    </Router>
  )
}


export default App


