import React from 'react';
import { render } from 'react-dom';
import { Router, Route, hashHistory, Redirect } from 'react-router';
import App from 'containers/app';
import './global.scss';


const createApp = theme => props => (<App {...props} theme={theme} />)


render(
  <div>
    <Router history={hashHistory}>
      <Route path='default' component={ createApp('default') } />
      <Route path='darker' component={ createApp('darker') } />
      <Route path='palenight' component={ createApp('palenight') } />
      <Route path='lighter' component={ createApp('lighter') } />
      <Redirect from='/' to='default' />
    </Router>
  </div>,
  document.getElementById('root')
);
