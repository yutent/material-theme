import React from 'react';
import classNames from 'classnames/bind';
import Header from '../../components/header';
import Preview from '../../components/preview';

import style from './style';
let cls = classNames.bind(style);

let App = ({theme}) => {

  return (
    <div className={ cls('App') }>
      {/* App preview */}
      <Preview theme={theme} />
      {/* Header */}
      <Header title='Material Theme' subtitle='The most epic theme for Sublime Text.' cta='Start here!' theme={theme} />
    </div>
  );
};

// Default props
Preview.defaultProps = {
  theme: 'default'
};



export default App;
