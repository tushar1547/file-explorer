import React, { Component } from 'react';

import './AddNewFolder.scss';

class AddNewFolder extends Component {
  state = {
    name: ''
  }

  handleOnChange = e => {
    this.setState({ name: e.target.value });
  }

  handleKeyDown = e => {
    if (e.key === 'Enter') {
      this.props.handleAddFolder(this.state.name);
    }
  }

  render() {
    const { handleAddFolder, handleShowModal, isError } = this.props;

    return (
      <div className='add-folder'>
        <div className='add-folder-content'>
          <h3>Add new folder</h3>
          <input
            type='text'
            onChange={(e) => this.handleOnChange(e)}
            value={this.state.name}
            onKeyDown={this.handleKeyDown}
          />
          {isError ? <p className='error-label'>Enter a folder name</p> : null}
          <button onClick={() => handleAddFolder(this.state.name)}>Add</button>
          <button onClick={handleShowModal}>Cancel</button>
        </div>
      </div>
    )
  }
}

export default AddNewFolder;
