import React from 'react';
import classNames from 'classnames/bind';

import style from './style.scss';

let cx = classNames.bind(style);

// Component
let Preview = () => {

  return (
    <div className={ cx('Preview') } >
      <div className={ cx('Panel', 'Panel-Lighter') } id='lighter'></div>
      <div className={ cx('Panel', 'Panel-Palenight') } id='palenight'></div>
      <div className={ cx('Panel', 'Panel-Darker') } id='darker'></div>
      <div className={ cx('Panel', 'Panel-Default') } id='default'></div>
    </div>
  );
};


export default Preview;
