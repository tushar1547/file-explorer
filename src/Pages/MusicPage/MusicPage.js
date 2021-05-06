import React, { Component } from 'react';
import { connect } from 'react-redux';

import Folder from '../../components/Folder/Folder';

class MusicPage extends Component {
  render () {
    const { foldersData } = this.props;

    return (
      <div className='folders-container'>
        {foldersData.folders.map(folder => <Folder key={folder} folder={folder} /> )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    foldersData: state.foldersData
  }
}

export default connect(mapStateToProps)(MusicPage);
