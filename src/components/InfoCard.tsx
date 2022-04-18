import React from 'react';
import { IconButton, ArrowIcon } from '../UIKit';
import './../styles/css/index.css';
import Right from './../static/images/icons/to-right.svg';


declare let require: any;
function InfoCard(props: any) {
  const {header, title, body} = props.item;
  let clName = 'info-card';
  if (props.className) {
    clName = clName.concat(' ', props.className);
  }
  return (
    <div className={clName}>
      <div className='card-header'>{header}</div>
      <div className='card-title'>{title}</div>
      <div className='card-body'>{body}</div>
      {props.button && <IconButton size={50} icon={<ArrowIcon/>}/>}
    </div>
   
  );
}

export {InfoCard};