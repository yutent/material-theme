import React from 'react';
import classNames from 'classnames/bind';
import { Link } from 'react-router'

import style from './Switch.scss';

let cx = classNames.bind(style);

// Component
let Switch = ( {active, color, url} ) => {

  let cssClass = cx(
    'Switch': true,
    [`${color}`]: true,
    { 'isActive': active }
  );

  return (
    <Link to={url} className={ cssClass }></Link>
  );
};


export default Switch;
