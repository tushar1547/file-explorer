import React, { Component } from 'react';
import { connect } from 'react-redux';

import Routes from '../../routes';
import Header from '../Header/Header';
import FolderMenu from '../FolderMenu/FolderMenu';
import FolderActivity from '../FolderActivity/FolderActivity';

import * as folderActions from '../../store/actions/folderActions';

import './Layout.scss';

class Layout extends Component {
  state = {
    showModal: false,
    inputErrorMsg: '',
    folderActivityTitle: '',
    folderPrimaryActionText: '',
    provisionMethod: null,
    folderName: ''
  }

  handleShowModal = (actionType, folderName = '') => {
    if (actionType === 'new') {
      this.setState({
        folderActivityTitle: 'Add new folder',
        folderPrimaryActionText: 'Add',
        provisionMethod: this.handleAddFolder
      });
    }

    if (actionType === 'rename') {
      this.setState({
        folderActivityTitle: 'Rename folder',
        folderPrimaryActionText: 'Rename',
        provisionMethod: this.handleFolderRename,
        folderName: folderName
      });
    }

    this.setState({ showModal: !this.state.showModal });

    if (!this.state.showModal) {
      this.setState({ inputErrorMsg: '' });
    }
  }

  handleAddFolder = name => {
    const { onAddFolder } = this.props;

    if (name.length) {
      onAddFolder(name);
      this.setState({ showModal: !this.state.showModal });
    } else {
      this.setState({ inputErrorMsg: 'Enter folder name' });
    }
  }

  handleRemoveFolder = name => {
    const { onRemoveFolder } = this.props;
    onRemoveFolder(name);
  }

  handleFolderRename = name => {
    const { onRenameFolder, foldersData } = this.props;
    if (name.length) {
      onRenameFolder(name, foldersData.folders, this.state.folderName);
      this.setState({ showModal: !this.state.showModal });
    } else {
      this.setState({ inputErrorMsg: 'Enter new file name' });
    }
  }
  
  render() {
    const { showModal, inputErrorMsg, folderActivityTitle, folderPrimaryActionText, provisionMethod } = this.state;

    return (
      <div className='layout-container'>
        <div className='layout'>
          <Header />
          <Routes />
          <FolderMenu
            handleShowModal={this.handleShowModal}
            handleRemoveFolder={this.handleRemoveFolder}
          />
          {
            showModal &&
            <FolderActivity
              title={folderActivityTitle}
              handleProvision={provisionMethod}
              handleShowModal={this.handleShowModal}
              actionText={folderPrimaryActionText}
              inputErrorMsg={inputErrorMsg}
            />
          }
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    foldersData: state.foldersData
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onAddFolder: folderName => dispatch(folderActions.addFolder(folderName)),
    onRemoveFolder: folderName => dispatch(folderActions.removeFolder(folderName)),
    onRenameFolder: (folderName, data, name) => dispatch(folderActions.renameFolder(folderName, data, name))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Layout);
