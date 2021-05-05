import React from 'react';

import './Header.scss';

const Header = () => {
  return (
    <div className='explorer-header'>
      <div className='header-left'>
        <div className='navigation'>
          <img className='icon one' src={require('../../assets/images/left-arrow.png')} alt='Nav back' />
          <img className='icon two' src={require('../../assets/images/left-arrow.png')}  alt='Nav forward' />
        </div>
        <div className='curr-tab'>
          <p className='curr-tab-label'>Music</p>
        </div>
      </div>
      <div className='header-right'>
        <img src={require('../../assets/images/header-options.png')} />
      </div>
    </div>
  );
}

export default Header;
