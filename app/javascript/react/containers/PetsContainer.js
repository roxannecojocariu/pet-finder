import React, { Component } from 'react'
import { browserHistory } from 'react-router'
import FetchedPets from '../components/FetchedPets'

class PetsContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render() {
    return(
      <div>
      <FetchedPets />
      </div>
    )
  }
}

export default PetsContainer
