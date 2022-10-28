import 'reset-css';
import './App.scss';

import TodoInput from './components/TodoInput';
import Todos from './components/Todos';

import styled from 'styled-components';

import { useState, useEffect } from 'react';

const Container = styled.div`
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

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  margin-bottom: 2rem;
`;

const Title = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  text-transform: uppercase;
`;

const SortButton = styled.a`
  background-color: transparent;
  border-radius: 0;
  border: none;
  color: #222;
  font-size: 1rem;
  font-weight: 300;
  padding: 0.5rem;
  cursor: pointer;
`;

const Main = styled.main`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const App = () => {
  const [clientTodos, setClientTodos] = useState(
    JSON.parse(localStorage.getItem('clientTodos'))
  );

  const sortTypes = {
    unset: "sort by",
    completed: "sort by Completed",
    uncompleted: "sort by Uncompleted",
  };

  const [sortBy, setSortBy] = useState(
    JSON.parse(localStorage.getItem('sortBy')) ?? sortTypes.unset
  );

  const setLocalStorage = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
  };

  useEffect(() => {
    setLocalStorage('clientTodos', clientTodos);
  }, [clientTodos]);

  useEffect(() => {
    setLocalStorage('sortBy', sortBy);
  }, [sortBy]);

  const applyTodosSort = (e, clientTodos) => {
    e.preventDefault();

    if (sortBy === sortTypes.uncompleted) {
      clientTodos.sort((a, b) => +(a.isCancelled) - +(b.isCancelled));
      setSortBy(sortTypes.completed);
      e.target.innerText = sortTypes.uncompleted;
    } else {
      clientTodos.sort((a, b) => +(b.isCancelled) - +(a.isCancelled));
      setSortBy(sortTypes.uncompleted);
      e.target.innerText = sortTypes.completed;
    }

    setClientTodos([...clientTodos]);
  };

  return (
    <Container>
      <Header>
        <Title className="header__title">Todo</Title>
        <SortButton
          type="button" 
          className="button header__search"
          onClick={(e) => applyTodosSort(e, clientTodos) }>
          { sortBy }
        </SortButton>
      </Header>
      <Main>
        <TodoInput clientTodos={ clientTodos } setClientTodos={ setClientTodos } />
        {
          clientTodos ?
            <Todos clientTodos={ clientTodos } setClientTodos={ setClientTodos } /> :
            null
        }
      </Main>
    </Container>
  );
}

export default App;
