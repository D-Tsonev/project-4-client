import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from './components/common/Home'
import Nav from './components/common/Nav'
import InstrumentsIndex from './components/instruments/InstrumentsIndex'
import InstrumentShow from './components/instruments/InstrumentShow'

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/instruments/:id" component={InstrumentShow} />
        <Route path="/instruments" component={InstrumentsIndex} />
      </Switch>
    </BrowserRouter>
  )
}

export default App