import React, { Component } from 'react';
import { connect } from 'react-redux';

import Routes from '../../routes';
import Header from '../Header/Header';
import FolderMenu from '../FolderMenu/FolderMenu';
import AddNewFolder from '../AddNewFolder/AddNewFolder';

import * as folderActions from '../../store/actions/folderActions';

import './Layout.scss';

class Layout extends Component {
  state = {
    showModal: false,
    inputError: false
  }

  handleShowModal = () => {
    this.setState({ showModal: !this.state.showModal });

    if (!this.state.showModal) {
      this.setState({ inputError: false })
    }
  }

  handleAddFolder = name => {
    const { onAddFolder } = this.props;

    if (name.length) {
      onAddFolder(name);
      this.setState({ showModal: !this.state.showModal });
    } else {
      this.setState({ inputError: !this.state.inputError });
    }
  }

  handleRemoveFolder = name => {
    const { onRemoveFolder } = this.props;
    onRemoveFolder(name);
  }
  
  render() {
    const { showModal, inputError } = this.state;
    return (
      <div className='layout-container'>
        <div className='layout'>
          <Header />
          <Routes />
          <FolderMenu handleShowModal={this.handleShowModal} handleRemoveFolder={this.handleRemoveFolder} />
          {showModal && <AddNewFolder handleAddFolder={this.handleAddFolder} handleShowModal={this.handleShowModal} isError={inputError} />}
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onAddFolder: folderName => dispatch(folderActions.addFolder(folderName)),
    onRemoveFolder: folderName => dispatch(folderActions.removeFolder(folderName))
  }
}

export default connect(null, mapDispatchToProps)(Layout);
