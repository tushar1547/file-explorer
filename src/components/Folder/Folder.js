import React, { Component } from 'react';

import Draggable from 'react-draggable';

import './Folder.scss';

class Folder extends Component {
  render() {
    const { folder } = this.props;

    return (
      <Draggable>
        <div className='folder'>
          <div className='folder-icon'>
            <img className='folder-img' src={require('../../assets/images/folder.png')} alt={folder} />
          </div>
          <p className='folder-label'>{folder}</p>
        </div>
      </Draggable>
    )
  }
}

export default Folder;
