import React, { Component } from 'react';

import './AddNewFolder.scss';

class AddNewFolder extends Component {
  state = {
    name: ''
  }

  handleOnChange = (e) => {
    this.setState({ name: e.target.value });
  }

  render() {
    const { handleAddFolder, handleShowModal } = this.props;

    return (
      <div className='add-folder'>
        <div className='add-folder-content'>
          <h3>Add new folder</h3>
          <input type='text' onChange={(e) => this.handleOnChange(e)} value={this.state.name} />
          <button onClick={() => handleAddFolder(this.state.name)}>Add</button>
          <button onClick={handleShowModal}>Cancel</button>
        </div>
      </div>
    )
  }
}

export default AddNewFolder;
