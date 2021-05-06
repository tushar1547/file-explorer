import React, { Component } from 'react';

import './FolderActivity.scss';

class FolderActivity extends Component {
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
    const { handleProvision, handleShowModal, inputErrorMsg, title, actionText } = this.props;

    return (
      <div className='add-folder'>
        <div className='add-folder-content'>
          <h3>{title}</h3>
          <input
            type='text'
            onChange={(e) => this.handleOnChange(e)}
            value={this.state.name}
            onKeyDown={this.handleKeyDown}
          />
          {inputErrorMsg.length ? <p className='error-label'>{inputErrorMsg}</p> : null}
          <button onClick={() => handleProvision(this.state.name)}>{actionText}</button>
          <button onClick={handleShowModal}>Cancel</button>
        </div>
      </div>
    )
  }
}

export default FolderActivity;
