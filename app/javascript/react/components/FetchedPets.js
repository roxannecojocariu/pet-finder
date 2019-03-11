import React, { Component } from 'react'
import { browserHistory } from 'react-router'
import FetchedPetTile from './FetchedPetTile'

class FetchedPets extends Component {
  constructor(props) {
    super(props)
    this.state = {
      animals: [],
    }
  }

  componentDidMount(){
    // let location = '02116'
    fetch(`/api/v1/fetched_pets?location=${this.props.location}`,{
      credentials: 'same-origin'
    })
    .then(response => {
      if(response.ok) {
        return response;
      } else {
        let errorMessage = `${response.status} (${response.statusText})`,
        error = new Error(errorMessage);
        throw(error);
      }
    })
    .then(response => response.json())
    .then(body => {
      this.setState({
        animals: body
      })
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
    }


  render(){
    let animals;
    animals = this.state.animals.map((animal) => {
      return(
        <FetchedPetTile
          key={animal.id}
          name={animal.name}
          age={animal.age}
          description={animal.description}
          photo={animal.photo}
        />
      )
    })

    return(
      <div>
        Welcome!<br />
        {animals}

      </div>
    )
  }
}

export default FetchedPets
