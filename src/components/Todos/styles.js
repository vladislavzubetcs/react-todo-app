import styled from "styled-components";

export const TodosList = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const TodosListItem = styled.li`
  width: 100%;
  text-align: center;
  font-weight: 300;
  cursor: pointer;
  color: #222;
  transition: opacity 0.2s ease-in-out;

  ${(props) =>
    props.isCancelled && "text-decoration: line-through; opacity: .2;"};
`;
