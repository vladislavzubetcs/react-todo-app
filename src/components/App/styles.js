import styled from "styled-components";

export const Container = styled.div`
  max-width: 480px;
  width: 100%;
  margin: 0 auto;
  min-height: max-content;
  height: 100vh;
  background-color: #fff;
  padding: 3rem 2rem;
  overflow: auto;
  box-sizing: border-box;
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  margin-bottom: 2rem;
`;

export const Title = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  text-transform: uppercase;
`;

export const SortButton = styled.a`
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

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
