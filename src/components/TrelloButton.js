import React from "react";
import styled from "styled-components";
import PropTypes from 'prop-types'
import Button from "@material-ui/core/Button";

const StyledButton = styled(Button)`
  && {
    color: white;
    background: #5aac44;
  }
`;

const TrelloButton = ({ children, onClick }) => {
  return (
    <StyledButton variant="contained" onMouseDown={onClick}>
      {children}
    </StyledButton>
  );
};

TrelloButton.propTypes={
  children: PropTypes.string,
  onClick: PropTypes.func,
}

export default TrelloButton;
