import React, { Component } from 'react';
import classNames from 'classnames/bind';
import Header from '../../components/header';
import Preview from '../../components/preview';

import style from './style';
let cls = classNames.bind(style);

class App extends Component {
  render() {
    return (
      <div className={ cls('App') }>
        {/* App preview */}
        <Preview />
        {/* Header */}
        <Header title='Material Theme' subtitle='The most epic theme for Sublime Text.' cta='Start here!'/>
      </div>
    );
  }
}

export default App;
