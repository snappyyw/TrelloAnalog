import React, { useState } from "react";
import PropTypes from 'prop-types'
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";
import { Draggable } from "react-beautiful-dnd";
import TrelloForm from "./TrelloForm";
import { editCard, deleteCard } from "../action";
import { connect } from "react-redux";
import TrelloButton from "./TrelloButton";




const TrelloCard = React.memo(({ text, id, listID, index, dispatch }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [cardText, setText] = useState(text);

  const closeForm = e => {
    setIsEditing(false);
  };

  const handleChange = e => {
    setText(e.target.value);
  };

  const saveCard = e => {
    e.preventDefault();

    dispatch(editCard(id, listID, cardText));
    setIsEditing(false);
  };

  const handleDeleteCard = e => {
    console.log(listID);
    dispatch(deleteCard(id, listID));
  };

  const renderEditForm = () => {
    return (
      <TrelloForm text={cardText} onChange={handleChange} closeForm={closeForm}>
        <TrelloButton onClick={saveCard}>Сохранить</TrelloButton>
      </TrelloForm>
    );
  };

  const renderCard = () => {
    return (
      <Draggable draggableId={String(id)} index={index}>
        {provided => (
          <div className='card-items'
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}
            onDoubleClick={() => setIsEditing(true)}
          >
            <Card>
              <button className='delate-button' onMouseDown={handleDeleteCard}>
                Удалить
              </button>
              <CardContent>
                <Typography>{text}</Typography>
              </CardContent>
            </Card>
          </div>
        )}
      </Draggable>
    );
  };
  return isEditing ? renderEditForm() : renderCard();
});
TrelloCard.propTypes={
  text: PropTypes.string,
  id:PropTypes.string,
  listID:PropTypes.string,
  index: PropTypes.number,
  dispatch: PropTypes.func
}

export default connect()(TrelloCard);
