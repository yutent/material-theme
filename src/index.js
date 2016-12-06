import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory, Redirect } from 'react-router';
import App from 'containers/app';
import './global.scss';

render(
  <Router history={browserHistory}>
    <Route path='/#default' component={App}>
      <Redirect from='/' to='/#default' />
    </Route>
  </Router>,
  document.getElementById('root')
);
