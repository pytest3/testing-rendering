import { useState } from "react";
import styled from "styled-components";

export default function Card({ isActive, children, title, clickHandler }) {
  return (
    <Wrapper>
      <h2>{title}</h2>
      {children}
      {!isActive && <Button onClick={clickHandler}>Click Me</Button>}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  border: 1px solid deeppink;
  margin: 16px 0;
  text-align: left;
  padding: 16px;
`;

const Button = styled.button`
  background-color: gray;
  font-size: 0.7rem;
  padding: 4px 10px;
  margin-top: 5px;
  color: white;
`;
