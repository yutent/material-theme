import React from 'react';
import classNames from 'classnames/bind';
import Switcher from '../switcher';

import style from './style';

let cx = classNames.bind(style);

// Component
let Header = ({title, subtitle, cta, theme}) => {

  return (
    <div className={ cx('Header') } >
      <h1 className={ cx('Header-Title') } >{ title }</h1>
      <h3 className={ cx('Header-Subtitle') } >
        {subtitle}
        <a href="https://github.com/equinusocio/material-theme" title="Open GitHub" className={ cx('Header-cta') } >{ cta }</a>
      </h3>

      <Switcher theme={ theme } />
    </div>
  );
};


export default Header;
