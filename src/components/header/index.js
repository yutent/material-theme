import React from 'react';
import classNames from 'classnames/bind';
import Switcher from '../switcher';

import style from './style';

let cx = classNames.bind(style);

// Component
let Header = () => {

  return (
    <div className={ cx('Header') } >
      <h1 className={ cx('Header-Title') } >Material Theme</h1>
      <h3 className={ cx('Header-Subtitle') } >
        The most epic theme for Sublime Text.
        <a href="https://github.com/equinusocio/material-theme" title="Open GitHub" className={ cx('Header-cta') } >Start here!</a>
      </h3>

      <Switcher />
    </div>
  );
};


export default Header;
