import React, { Component } from 'react'
import { browserHistory } from 'react-router'
import Select from '../components/Select';
import TextField from '../components/TextField';

class PetsForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      typeOfAnimal: ['', 'barnyard', 'bird', 'cat', 'dog', 'horse', 'reptile', 'smallfurry'],
      typeOfAnimalSelected: '',
      ageOfAnimal: ['', 'Baby', 'Young', 'Adult', 'Senior'],
      ageOfAnimalSelected: [''],
      location: '',
      errors: {}
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleClearForm = this.handleClearForm.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleClearForm(event) {
    event.preventDefault();
    this.setState({
      errors: {},
      typeOfAnimalSelected: '',
      ageOfAnimalSelected: ''
    })
  }

  handleChange(event) {
  let value = event.target.value;
  let name = event.target.name;
  this.setState({ [name]: value })
}

  handleFormSubmit(event) {
    event.preventDefault();
    this.setState({
      typeOfAnimalSelected: event.target.value,
      ageOfAnimalSelected: event.target.value,
      location: event.target.value
    })
    this.handleClearForm(event)
  }

  render() {
    return(
      <div>
        Please search for whatever animal you'd like!
        <form className="petSearchForm" onSubmit={this.handleFormSubmit}>
          <Select
            label='Type of Animal (optional) '
            options={this.state.typeOfAnimal}
            selectedOption={this.state.anitypeOfAnimalSelected}
            handleChange={this.handleChange}
          /><br />
          <Select
            label='Age of Animal (optional) '
            options={this.state.ageOfAnimal}
            selectedOption={this.state.ageOfAnimalSelected}
            handleChange={this.handleChange}
          /><br />
          <TextField
            content={this.state.location}
            label='Location (required) '
            name='location'
            handleChange={this.handleChange}
          />
          <input className="button" type="submit" value="Submit" />
        </form>

      </div>
    )
  }
}

export default PetsForm
