import React from 'react'
import { Route, IndexRoute, Router, browserHistory } from 'react-router'

import FetchedPetsContainer from './FetchedPetsContainer'

const App = (props) => {
  return (
    <div>
      <Router history={browserHistory}>
        <Route path='/' component={FetchedPetsContainer} />
      </Router>
    </div>
  )
}

export default App
