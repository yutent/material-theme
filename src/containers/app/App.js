import React, { Component } from 'react';
import classNames from 'classnames/bind';
import style from './App.scss';

let cls = classNames.bind(style);

class App extends Component {
  render() {
    return (
      <div className={ cls('App') }>
        Welcome
      </div>
    );
  }
}

export default App;
