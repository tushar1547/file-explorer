import React, { Component } from 'react';

import './FolderMenu.scss';

class FolderMenu extends Component {
  state = {
    xPos: '',
    yPos: '',
    show: false,
    showFolderOptions: false,
    folderName: ''
  }

  componentDidMount() {
    document.addEventListener("click", this.handleClick);
    document.addEventListener("contextmenu", this.handleContextMenu);
  }

  componentWillUnmount() {
    document.removeEventListener("click", this.handleClick);
    document.removeEventListener("contextmenu", this.handleContextMenu);
  }

  handleClick = e => {
    if (this.state.show) this.setState({ show: false });
  };

  handleContextMenu = e => {
    e.preventDefault();
    const targetEleClass = e.target.className;
    const folderName = e.target.alt;
  
    this.setState({
      xPos: `${e.pageX}px`,
      yPos: `${e.pageY}px`,
      show: true,
    });

    if (targetEleClass === 'folder-img' || targetEleClass === 'folder' || targetEleClass === 'folder-label') {
      this.setState({ showFolderOptions: true, folderName: folderName });
    } else {
      this.setState({ showFolderOptions: false });
    }
  };

  render() {
    const { show, xPos, yPos, showFolderOptions, folderName } = this.state;
    const { handleShowModal, handleRemoveFolder } = this.props;

    if (show) {
      return (
        <ul
          className="folder-menu"
          style={{
            top: yPos,
            left: xPos,
          }}
        >
          <li onClick={() => handleShowModal('new')}>New folder</li>
          {
            showFolderOptions ?
            <>
              <li onClick={() => handleRemoveFolder(folderName)}>Delete</li>
              <li onClick={() => handleShowModal('rename', folderName)}>Rename</li>
            </>
            : null
          }
        </ul>
      );
    } else return null;
  }
}

export default FolderMenu;
