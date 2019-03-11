import React from 'react';

const Select = props => {
  let optionElements = props.options.map(option =>{
    return (
      <option key={option} value={option}>{option}</option>
    );
  })

  return (
    <label onChange={props.handleChange}>{props.label}
      <select onChange={props.handleChange}>
        <option value=""></option>
        {optionElements}
      </select>
    </label>
  );
}

export default Select;
