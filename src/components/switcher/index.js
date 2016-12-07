import React from 'react';
import classNames from 'classnames/bind';
import Switch from './Switch';

import style from './Switcher.scss';

let cx = classNames.bind(style);

// Component
let Switcher = ({theme}) => {

  const themeIs = isEqTo => theme === isEqTo;

  return (
    <div className={ cx('Switcher') } >
      <Switch url='/default' color="Default" active={ themeIs('default') }/>
      <Switch url='/darker' color="Darker" active={ themeIs('darker') } />
      <Switch url='/palenight' color="Palenight" active={ themeIs('palenight') } />
      <Switch url='/lighter' color="Lighter" active={ themeIs('lighter') } />
    </div>
  );
};


export default Switcher;
