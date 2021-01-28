import React from "react";
import PropTypes from 'prop-types'
import styled from "styled-components";
import Textarea from "react-textarea-autosize";
import Card from "@material-ui/core/Card";

const StyledCard = styled(Card)`
  min-height: 80px;
  padding: 6px 10px 2px;
`;

const StyledTextArea = styled(Textarea)`
  resize: none;
  width: 100%;
  overflow: hidden;
  outline: none;
  border: none;
`;


const TrelloForm = React.memo(
  ({ text = "", onChange, closeForm, children }) => {
    const handleFocus = e => {
      e.target.select();
    };
    
    return (
      <div className='bloc-edit'>
        <StyledCard>
          <StyledTextArea
            autoFocus
            onFocus={handleFocus}
            value={text}
            onChange={e => onChange(e)}
            onBlur={closeForm}
          />
        </StyledCard>
        <div className='button-container'>
          {children}
          <button className='button-close' onMouseDown={closeForm}>Закрыть</button>
        </div>
      </div>
    );
  }
);
TrelloForm.protoType={
  text: PropTypes.string,
  onChange: PropTypes.func,
  closeForm: PropTypes.func,
  children:PropTypes.array
}

export default TrelloForm;
