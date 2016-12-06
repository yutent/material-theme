import React from 'react';
import ReactDOM from 'react-dom';
import App from 'containers/app';
import './global.scss';

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
//
// import React from 'react';
// import { render } from 'react-dom';
// import { Router, Route, browserHistory } from 'react-router';
// import App from 'containers/app';
// import './global.scss';
//
// render(
//   (<Router history={browserHistory}>
//     <Route path="/" component={App}></Route>
//   </Router>),
//   document.getElementById('root')
// );
