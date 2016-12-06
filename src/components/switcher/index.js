import React from 'react';
import classNames from 'classnames/bind';

import style from './style';

let cx = classNames.bind(style);

// Component
let Switcher = () => {

  return (
    <div className={ cx('Switcher') } >
      <a href='#default' className={ cx('Switcher-Theme', 'default') } ></a>
      <a href='#darker' className={ cx('Switcher-Theme', 'darker') } ></a>
      <a href='#palenight' className={ cx('Switcher-Theme', 'palenight') } ></a>
      <a href='#lighter' className={ cx('Switcher-Theme', 'lighter') } ></a>
    </div>
  );
};


export default Switcher;

// 
// import React from 'react';
// import { Link } from 'react-router';
// import classNames from 'classnames/bind';
//
// import style from './style';
//
// let cx = classNames.bind(style);
//
// // Component
// let Switcher = () => {
//
//   return (
//     <div className={ cx('Switcher') } >
//       <Link to='#default' className={ cx('Switcher-Theme', 'default') } />
//       <Link to='#darker' className={ cx('Switcher-Theme', 'darker') } />
//       <Link to='#palenight' className={ cx('Switcher-Theme', 'palenight') } />
//       <Link to='#lighter' className={ cx('Switcher-Theme', 'lighter') } />
//     </div>
//   );
// };
//
//
// export default Switcher;
