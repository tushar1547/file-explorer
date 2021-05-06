import * as actionTypes from './actionTypes';

export const addFolder = name => {
  return {
    type: actionTypes.ADD_FOLDER,
    folderName: name
  }
}

export const removeFolder = name => {
  return {
    type: actionTypes.REMOVE_FOLDER,
    folderName: name
  }
}

export const renameFolder = (name, data, folderName) => {
  const idx = data.indexOf(folderName);

  return {
    type: actionTypes.RENAME_FOLDER,
    renameData: {
      oldNameIndex: idx,
      newName: name
    }
  }
}
