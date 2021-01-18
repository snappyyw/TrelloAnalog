
export const addCard = (listID, text) => {
  const id = `${Math.floor(Math.random() * 100)}_${Math.floor(Math.random() * 100)}_${Math.floor(Math.random() * 100)}`;
  return {
    type: "ADD_CARD",
    payload: { text, listID, id }
  };
};

export const editCard = (id, listID, newText) => {
  return {
    type: "EDIT_CARD",
    payload: { id, listID, newText }
  };
};

export const deleteCard = (id, listID) => {
  return {
    type: "DELETE_CARD",
    payload: { id, listID }
  };
};
