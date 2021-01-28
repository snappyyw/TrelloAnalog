import React, { useState } from "react";
import TrelloCard from "./TrelloCard";
import TrelloCreate from "./TrelloCreate";
import { Droppable, Draggable } from "react-beautiful-dnd";
import { connect } from "react-redux";
import { editTitle, deleteList } from "../action";
import PropTypes from 'prop-types'


const TrelloList = ({ title, cards, listID, index, dispatch }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [listTitle, setListTitle] = useState(title);

  const renderEditInput = () => {
    return (
      <form onSubmit={handleFinishEditing}>
        <input
          className='input-heder'
          type="text"
          value={listTitle}
          onChange={handleChange}
          autoFocus
          onFocus={handleFocus}
          onBlur={handleFinishEditing}
        />
      </form>
    );
  };

  const handleFocus = e => {
    e.target.select();
  };

  const handleChange = e => {
    e.preventDefault();
    setListTitle(e.target.value);
  };

  const handleFinishEditing = e => {
    setIsEditing(false);
    dispatch(editTitle(listID, listTitle));
  };

  const handleDeleteList = () => {
    dispatch(deleteList(listID));
  };

  return (
    <Draggable draggableId={String(listID)} index={index}>
      {provided => (
        <div className='container'
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          <Droppable droppableId={String(listID)} type="card">
            {provided => (
              <div>
                <div>
                  {isEditing ? (
                    renderEditInput()
                  ) : (
                    <div className="title-container" onClick={() => setIsEditing(true)}>
                      <h3>{listTitle}</h3>
                      <button onClick={handleDeleteList}>
                        Удалить
                      </button>
                    </div>
                  )}
                </div>
                <div {...provided.droppableProps} ref={provided.innerRef}>
                  {cards.map((card, index) => (
                    <TrelloCard
                      key={card.id}
                      text={card.text}
                      id={card.id}
                      index={index}
                      listID={listID}
                    />
                  ))}
                  {provided.placeholder}
                  <TrelloCreate listID={listID} />
                </div>
              </div>
            )}
          </Droppable>
        </div>
      )}
    </Draggable>
  );
};
TrelloList.protoType={
 title:PropTypes.string,
 cards:PropTypes.object,
 listID:PropTypes.string,
 index:PropTypes.number,
 dispatch:PropTypes.func
}

export default connect()(TrelloList);
