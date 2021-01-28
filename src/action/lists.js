import { v4 as uuidv4 } from 'uuid';

export const addList = title => {
  return (dispatch, getState) => {
    const boardID = getState().activeBoard;
    const id = uuidv4();
    dispatch({
      type: "ADD_LIST",
      payload: { title, boardID, id }
    });
  };
};

export const sort = (
  droppableIdStart,
  droppableIdEnd,
  droppableIndexStart,
  droppableIndexEnd,
  draggableId,
  type
) => {
  return (dispatch, getState) => {
    const boardID = getState().activeBoard;
    dispatch({
      type: "DRAG_HAPPENED",
      payload: {
        droppableIdStart,
        droppableIdEnd,
        droppableIndexEnd,
        droppableIndexStart,
        draggableId,
        type,
        boardID
      }
    });
  };
};

export const editTitle = (listID, newTitle) => {
  return {
    type: "EDIT_LIST_TITLE",
    payload: {
      listID,
      newTitle
    }
  };
};

export const deleteList = listID => {
  return (dispatch, getState) => {
    const boardID = getState().activeBoard;
    return dispatch({
      type: "DELETE_LIST",
      payload: {
        listID,
        boardID
      }
    });
  };
};