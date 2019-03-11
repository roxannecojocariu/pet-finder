import React, { Component } from 'react'
import { browserHistory } from 'react-router'
import Select from '../components/Select';
import FetchedPets from '../components/FetchedPets';
import TextField from '../components/TextField';

class PetsForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      typeOfAnimal: ['', 'barnyard', 'bird', 'cat', 'dog', 'horse', 'reptile', 'smallfurry'],
      typeOfAnimalSelected: null,
      ageOfAnimal: ['', 'Baby', 'Young', 'Adult', 'Senior'],
      ageOfAnimalSelected: null,
      location: null,
      animals: '',
      errors: {},
      submitted: false,
    }

  this.handleChange = this.handleChange.bind(this);
  // this.handleClearForm = this.handleClearForm.bind(this);
  this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  // handleClearForm(event) {
  //   event.preventDefault();
  //   this.setState({
  //     errors: {},
  //     typeOfAnimalSelected: '',
  //     ageOfAnimalSelected: ''
  //   })
  // }

  handleChange(event) {
    let value = event.target.value;
    let name = event.target.name;
    this.setState({ [name]: value })
  }

  handleFormSubmit(event) {
    event.preventDefault();
    if (this.state.submitted === true){
      this.setState({
        submitted: false
      }, (()=>{
        this.setState({
          submitted: true
        })
      })
    )
    } else {
      this.setState({
        submitted: true
      })
    }
  }

  render() {
    return(
      <div>
        Please search for whatever animal you'd like!
        <form className="petSearchForm" onSubmit={this.handleFormSubmit}>
          <Select
            label='Type of Animal (optional) '
            options={this.state.typeOfAnimal}
            selectedOption={this.state.typeOfAnimalSelected}
            handleChange={this.handleChange}
          /><br />
          <Select
            label='Age of Animal (optional) '
            options={this.state.ageOfAnimal}
            selectedOption={this.state.ageOfAnimalSelected}
            handleChange={this.handleChange}
          /><br />
          <TextField
            value={this.state.location}
            label='Location (required) '
            name='location'
            handleChange={this.handleChange}
          />
          <button className="submit-button" onClick={this.handleOnClick} type="submit" value="Submit">Submit</button>
        </form>
        {this.state.submitted && <FetchedPets
          location={this.state.location}
          animal={this.state.typeOfAnimalSelected}
          />}
      </div>
    )
  }
}

export default PetsForm
