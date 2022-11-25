import { TodosList, TodosListItem } from "./styles";

const Todos = ({ clientTodos, setClientTodos }) => {
  const changeTodoListItemStatus = (clientTodos, i) => {
    if (clientTodos[i].isCancelled) {
      clientTodos.splice(i, 1);
    } else {
      clientTodos[i].isCancelled = !clientTodos[i].isCancelled;
    }

    setClientTodos([...clientTodos]);
  };

  return (
    <TodosList>
      {clientTodos.map((clientTodo, i) => {
        return (
          <TodosListItem
            key={clientTodo.number}
            isCancelled={clientTodo.isCancelled}
            onClick={() => changeTodoListItemStatus(clientTodos, i)}
          >
            {clientTodo.text}
          </TodosListItem>
        );
      })}
    </TodosList>
  );
};

export default Todos;
