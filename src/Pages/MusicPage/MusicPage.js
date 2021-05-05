import React, { Component } from 'react';

import Folder from '../../components/Folder/Folder';

class MusicPage extends Component {
  render () {
    return (
      <div className='folders-container'>
        <Folder />
      </div>
    );
  }
}

export default MusicPage;
