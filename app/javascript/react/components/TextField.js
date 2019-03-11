import React from 'react';

const TextField = props => {

  return (
    <label onChange={props.handleChange}>{props.label}
      <input
        name={props.name}
        type='text'
      />
    </label>
  )
}

export default TextField;
