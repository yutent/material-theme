import React from 'react';
import classNames from 'classnames/bind';
import PreviewSlide from './PreviewSlide';

import style from './Preview';

let cx = classNames.bind(style);

// Component
let Preview = ({theme}) => {

  const themeIs = isEqTo => theme === isEqTo;

  return (
    <div className={ cx('Preview') } >
      <PreviewSlide color="Lighter" active={ themeIs('lighter') } />
      <PreviewSlide color="Palenight" active={ themeIs('palenight') } />
      <PreviewSlide color="Darker" active={ themeIs('darker') } />
      <PreviewSlide color="Default" active={ themeIs('default') } />
    </div>
  );
};

// Props validation
Preview.propTypes = {
  theme: React.PropTypes.string
};


// Default props
Preview.defaultProps = {
  theme: 'default'
};

export default Preview;
