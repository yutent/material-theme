import React from 'react';
import { render } from 'react-dom';
import { Router, Route, hashHistory, Redirect } from 'react-router';
import App from 'containers/app';
import './global.scss';

render(
  <div>
    <Router history={hashHistory}>
      <Route path='default' component={App} />
      <Route path='darker' component={App} />
      <Route path='palenight' component={App} />
      <Route path='lighter' component={App} />
      <Redirect from='/' to='default' />
    </Router>
  </div>,
  document.getElementById('root')
);
