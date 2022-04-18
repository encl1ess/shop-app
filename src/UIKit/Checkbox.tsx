import React from 'react';
// import '../styles/css/index.css';

function Checkbox(props: any) {
  const name = props.name;
  return (
    <div className='checkbox'> 
      <input type='checkbox' id={name} name={name} onClick={props.onClick}/>
      <label htmlFor={name}>{name}</label>
    </div>
  );
}

export default Checkbox;
