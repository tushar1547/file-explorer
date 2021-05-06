import * as actionTypes from './actionTypes';

export const addFolder = name => {
  return {
    type: actionTypes.ADD_FOLDER,
    folderName: name
  }
}
