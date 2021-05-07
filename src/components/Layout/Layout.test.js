import * as actions from '../../store/actions/folderActions';
import * as actionTypes from '../../store/actions/actionTypes';

describe('Layout component', () => {
  test('should add a new folder', () => {
    const folderName = 'Documents';
    const expectedAction = {
      type: actionTypes.ADD_FOLDER,
      folderName: folderName
    }
    expect(actions.addFolder(folderName)).toEqual(expectedAction);
  });

  test('should delete a folder', () => {
    const folderName = 'Music';
    const expectedAction = {
      type: actionTypes.REMOVE_FOLDER,
      folderName: folderName
    }
    expect(actions.removeFolder(folderName)).toEqual(expectedAction);
  });

  test('should rename a folder', () => {
    const newFolderName = 'Downloads';
    const oldFolderName = 'Apple music';
    const allFoldersData = {
      folders: ['Music', 'Apple music', 'some folder']
    };
    const expectedAction = {
      type: actionTypes.RENAME_FOLDER,
      renameData: {
        oldNameIndex: 1,
        newName: newFolderName
      }
    }
    expect(actions.renameFolder(newFolderName, allFoldersData.folders, oldFolderName)).toEqual(expectedAction);
  });
})
