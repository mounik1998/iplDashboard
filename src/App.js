import {Switch, Route} from 'react-router-dom'
import './App.css'
import NotFound from './components/NotFound'
import TeamMatches from './components/TeamMatches'
import Home from './components/Home'

const App = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/team-matches/:id" component={TeamMatches} />
    <Route component={NotFound} />
  </Switch>
)

export default App
