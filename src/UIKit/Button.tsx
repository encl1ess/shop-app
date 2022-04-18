import React from 'react';
import '../styles/css/index.css';

interface ButtonProps {
  content: string,
  width?: string,
  height?: string,
  className?: string,
  background?: string,
  onClick?: any
}
function Button(props: ButtonProps) {
  let clsName = 'custom-button';
  if(props.className){
    clsName = clsName.concat(' ', props.className)
  }
  return (
    <button onClick={props.onClick} className={clsName} style={{
      width: props.width,
      height:props.height,
      background: props.background
    }}> {props.content} </button>
  );
}

export default Button;
