import React, { Component } from 'react';

import './Folder.scss';

class Folder extends Component {
  render() {
    const { folder } = this.props;

    return (
      <div className='folder'>
        <div className='folder-icon'>
          <img className='folder-img' src={require('../../assets/images/folder.png')} alt={folder} />
        </div>
        <p className='folder-label'>{folder}</p>
      </div>
    )
  }
}

export default Folder;
