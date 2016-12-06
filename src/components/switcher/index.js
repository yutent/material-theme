import React from 'react';
import classNames from 'classnames/bind';

import style from './style.scss';

let cx = classNames.bind(style);

// Component
let Switcher = () => {

  return (
    <div className={ cx('Switcher') } >
      <a href='#default' className={ cx('Switcher-Theme', 'default') } ></a>
      <a href='#darker' className={ cx('Switcher-Theme', 'darker') } ></a>
      <a href='#palenight' className={ cx('Switcher-Theme', 'palenight') } ></a>
      <a href='#lighter' className={ cx('Switcher-Theme', 'lighter') } ></a>
    </div>
  );
};


export default Switcher;
