import React from 'react';

const FetchedPetTile = props => {
  return(
    <div>
      {props.name}<br />
      <img src={props.photo} /><br />
      {props.age}<br />
      {props.description}<br /><br />
    </div>
  )
}

export default FetchedPetTile;
