

export const addList = title => {
  return (dispatch, getState) => {
    const boardID = getState().activeBoard;
    const id = `${Math.floor(Math.random() * 100)}_${Math.floor(Math.random() * 100)}_${Math.floor(Math.random() * 100)}`
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