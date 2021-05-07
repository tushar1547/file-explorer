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

export const renameFolder = (newFolderName, data, oldFolderName) => {
  const idx = data.indexOf(oldFolderName);

  return {
    type: actionTypes.RENAME_FOLDER,
    renameData: {
      oldNameIndex: idx,
      newName: newFolderName
    }
  }
}

export const duplicateFolder = duplicatesData => {
  return {
    type: actionTypes.DUPLICATE_FOLDER,
    folderData: duplicatesData
  }
}
