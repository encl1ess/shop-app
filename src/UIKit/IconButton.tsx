import React from 'react';
import '../styles/css/index.css';
import { connect } from 'react-redux';

interface IconButtonProps {
  icon: any,
  onClick?: any,
  color?: string,
  size?: number,
  customBorder?: string
}
function IconButton({icon, onClick, color, size, customBorder}: IconButtonProps) {
  return (
    <button onClick={()=>onClick()} className='icon-button' style={{
      width: `${size}px`,
      height:`${size}px`,
      border: customBorder,
    }}>{typeof icon === 'string' ? <img src={icon}></img>: icon}
      </button>
  );
}

export default IconButton;
