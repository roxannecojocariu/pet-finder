import React from 'react'
import { Route, IndexRoute, Router, browserHistory } from 'react-router'

import PetsForm from './PetsForm'

const App = (props) => {
  return (
    <div>
      <Router history={browserHistory}>
        <Route path='/' component={PetsForm} />
      </Router>
    </div>
  )
}

export default App
