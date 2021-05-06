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

    default:
      return state;
  }
}

export default reducer;
