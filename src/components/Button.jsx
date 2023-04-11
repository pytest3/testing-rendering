import styled from "styled-components";

const Button = ({ secondary, onClick, children }) => {
  return (
    <StyledButton secondary={secondary} onClick={onClick}>
      {children}
    </StyledButton>
  );
};

export default Button;

const StyledButton = styled.button`
  border-radius: 5px;
  background-color: ${(p) => (p.secondary ? "gray" : "white")};
  color: ${(p) => (p.secondary ? "white" : "inherit")};
  border: ${(p) => (p.secondary ? "none" : "2px solid gray")};
  outline: none;
  /* cursor: pointer; */
  padding: 10px 15px;
  transition: all 0.5s ease;

  &:hover {
    /* transform: translate(0px, -2px); */
    background-color: ${(props) => (props.secondary ? "white" : "gray")};
    color: ${(p) => (p.secondary ? "inherit" : "white")};
    border: ${(p) => (p.secondary ? "2px solid gray" : "none")};
    transition: all, 0.5s ease;
  }

  &:focus {
    box-shadow: 0 0 0 3px silver;
  }

  &:active {
    font-weight: bold; /* need to update this */
  }
`;
