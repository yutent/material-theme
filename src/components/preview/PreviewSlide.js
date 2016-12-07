import React from 'react';
import classNames from 'classnames/bind';

import style from './PreviewSlide.scss';

let cx = classNames.bind(style);

// Component
let PreviewSlide = ({ theme }) => {
  let cssClass = cx(
    'PreviewSlide': true,
    {
      'lighter': theme === 'lighter',
      'darker': theme === 'darker',
      'default': theme === 'default',
      'palenight': theme === 'palenight'
    }
  );

  return (
    <div className={ cssClass } />
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
