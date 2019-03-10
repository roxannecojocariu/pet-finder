import React from 'react'
import { Route, IndexRoute, Router, browserHistory } from 'react-router'

import PetsContainer from './PetsContainer'
import PetsForm from './PetsForm'

const App = (props) => {
  return (
    <div>
      <Router history={browserHistory}>
        <Route path='/' component={PetsContainer} />
        <Route path='/pets/new' component={PetsForm} />
      </Router>
    </div>
  )
}

export default App
