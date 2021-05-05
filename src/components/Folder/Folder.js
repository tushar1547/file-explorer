import React, { Component } from 'react';

import './Folder.scss';

class Folder extends Component {
  render() {
    return (
      <div className='folder'>
        <div className='folder-icon'>
          <img src={require('../../assets/images/folder.png')} />
        </div>
        <p className='folder-label'>Music</p>
      </div>
    )
  }
}

export default Folder;
