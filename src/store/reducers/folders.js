import * as actionTypes from '../actions/actionTypes';

const initialState = {
  folders: ['Music', 'Apple music', 'some folder']
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_FOLDER:
      return {
        ...state,
        folders: state.folders.concat(action.folderName),
      };

    case actionTypes.REMOVE_FOLDER:
      return {
        ...state,
        folders: state.folders.filter(folder => action.folderName !== folder)
      }
    
    case actionTypes.RENAME_FOLDER:
      return {
        ...state,
        folders: state.folders.map((folder, idx) => (idx === action.renameData.oldNameIndex) ? action.renameData.newName : folder)
      }

    case actionTypes.DUPLICATE_FOLDER:
      return {
        ...state,
        folders: action.folderData
      }

    default:
      return state;
  }
}

export default reducer;
