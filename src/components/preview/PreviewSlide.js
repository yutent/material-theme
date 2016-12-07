import React from 'react';
import classNames from 'classnames/bind';

import style from './PreviewSlide.scss';

let cx = classNames.bind(style);

// Component
let PreviewSlide = ({ color, active }) => {

  return (
    <div className={ cx('Preview-Slide', `${color}`, { 'isNotActive': !active }) } />
  );
};

// Props validation
PreviewSlide.propTypes = {
  color: React.PropTypes.string,
  active: React.PropTypes.bool
};


// Default props
PreviewSlide.defaultProps = {
  color: 'Default'
};


export default PreviewSlide;
