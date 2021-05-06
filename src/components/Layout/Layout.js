import React, { Component } from 'react';
import { connect } from 'react-redux';

import Routes from '../../routes';
import Header from '../Header/Header';
import FolderMenu from '../FolderMenu/FolderMenu';
import AddNewFolder from '../AddNewFolder/AddNewFolder';

import * as folderActions from '../../store/actions/addFolder';

import './Layout.scss';

class Layout extends Component {
  state = {
    showModal: false
  }

  handleShowModal = () => {
    this.setState({ showModal: !this.state.showModal });
  }

  handleAddFolder = (name) => {
    const { onAddFolder } = this.props;
    onAddFolder(name);
    this.setState({ showModal: !this.state.showModal });
  }
  
  render() {
    const { showModal } = this.state;
    return (
      <div className='layout-container'>
        <div className='layout'>
          <Header />
          <Routes />
          <FolderMenu handleShowModal={this.handleShowModal} />
          {showModal && <AddNewFolder handleAddFolder={this.handleAddFolder} handleShowModal={this.handleShowModal} />}
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onAddFolder: folderName => dispatch(folderActions.addFolder(folderName))
  }
}

export default connect(null, mapDispatchToProps)(Layout);
