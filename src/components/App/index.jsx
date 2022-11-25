import "reset-css";

import TodoInput from "../TodoInput";
import Todos from "../Todos";

import { useState, useEffect } from "react";

import { getTodos, setTodos } from "../../hooks/Todos";
import { getSort, setSort, sort } from "../../hooks/Sort";

import { Container, Header, Title, SortButton, Main } from "./styles";

const App = () => {
  const [clientTodos, setClientTodos] = useState(
    getTodos()
  );

  const [sortBy, setSortBy] = useState(
    getSort()
  );

  useEffect(() => {
    setTodos(clientTodos)
  }, [clientTodos]);

  useEffect(() => {
    setSort(sortBy);
  }, [sortBy, clientTodos]);

  const applySort = () => {
    setSortBy(sort(clientTodos, setClientTodos));
  };

  return (
    <Container>
      <Header>
        <Title>Todo</Title>
        <SortButton
          onClick={() => applySort()}
        >
          {sortBy}
        </SortButton>
      </Header>
      <Main>
        <TodoInput
          clientTodos={clientTodos}
          setClientTodos={setClientTodos}
        />
        {clientTodos && (
          <Todos
            clientTodos={clientTodos}
            setClientTodos={setClientTodos}
          />
        )}
      </Main>
    </Container>
  );
};

export default App;
