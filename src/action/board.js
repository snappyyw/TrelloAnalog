
export const setActiveBoard = id => {
  return {
    type: "SET_ACTIVE_BOARD",
    payload: id
  };
};

export const addBoard = title => {
  const id = `${Math.floor(Math.random() * 100)}_${Math.floor(Math.random() * 100)}_${Math.floor(Math.random() * 100)}`;
  return {
    type: "ADD_BOARD",
    payload: { title, id }
  };
};