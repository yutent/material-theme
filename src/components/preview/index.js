import React from 'react';
import classNames from 'classnames/bind';
import PreviewSlide from './PreviewSlide';

import style from './Preview';

let cx = classNames.bind(style);

// Component
let Preview = ({theme}) => {


  return (
    <div className={ cx('Preview') } >
      <PreviewSlide theme={ theme } />
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
