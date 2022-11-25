import styled from "styled-components";

export const InputGroup = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Input = styled.input`
  width: 100%;
  border: none;
  padding: 1rem 2rem;
  box-sizing: border-box;
  outline: none;
  text-align: center;
  color: #222;
  font-size: 16px;
  font-family: inherit;

  ::placeholder {
    color: inherit;
    opacity: 0.2;
  }
`;

export const Button = styled.button`
  text-transform: uppercase;
  background-color: transparent;
  border-radius: 0;
  border: none;
  color: #222;
  font-size: 1rem;
  font-weight: 300;
  padding: 0.5rem;
  cursor: pointer;
  transition: opacity 0.2s ease-in-out;

  :hover {
    opacity: 0.6;
  }
`;
