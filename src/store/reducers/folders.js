import * as actionTypes from '../actions/actionTypes';

const initialState = {
  folders: ['Music', 'Apple music', 'some folder']
}

const reducer = (state = initialState, action) => {
  console.log('action', action);
  switch (action.type) {
    case actionTypes.ADD_FOLDER:
      return {
        ...state,
        folders: state.folders.concat(action.folderName),
      };

    default:
      return state;
  }
}

export default reducer;
