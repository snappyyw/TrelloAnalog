import { v4 as uuidv4 } from 'uuid';

export const addCard = (listID, text) => {
  const id = uuidv4();
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
