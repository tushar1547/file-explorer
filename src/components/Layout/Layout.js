import React from 'react';

import Routes from '../../routes';
import Header from '../Header/Header';

import './Layout.scss';

const Layout = () => {
  return (
    <div className='layout-container'>
      <div className='layout'>
        <Header />
        <Routes />
      </div>
    </div>
  );
}

export default Layout;
