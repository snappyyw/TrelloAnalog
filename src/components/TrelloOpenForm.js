import React from "react";
import styled from "styled-components";

const TrelloOpenForm = ({ list, children, onClick }) => {
  const buttonTextBackground = list ? "rgba(0,0,0,.15)" : "inherit";

  const OpenFormButton = styled.div`
    display: flex;
    align-items: center;
    cursor: pointer;
    border-radius: 3px;
    height: 36px;
    margin-left: 10px;
    width: 250px;
    padding-left: 20px;
    padding-right: 10px;
    opacity: 1;
    color: white;
    background-color: ${buttonTextBackground};
  `;

  return (
    <OpenFormButton onClick={onClick}>
      <p style={{ flexShrink: 0 }}>{children}</p>
    </OpenFormButton>
  );
};

export default TrelloOpenForm;
