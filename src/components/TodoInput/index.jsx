import { useState } from "react";
import { InputGroup, Input, Button } from "./styles";

const TodoInput = ({ clientTodos, setClientTodos }) => {
  const [inputListener, setInputListener] = useState("");

  const addTodoItem = () => {
    if (!inputListener) {
      alert("Please enter todo before");
      return;
    }

    const clientTodo = {
      number: Date.now(),
      text: inputListener,
      isCancelled: false,
    };

    setInputListener("");

    if (!clientTodos) {
      setClientTodos([clientTodo]);
    } else {
      setClientTodos([clientTodo, ...clientTodos]);
    }
  };

  return (
    <InputGroup>
      <Input
        onChange={(e) => setInputListener(e.target.value)}
        value={inputListener}
        onKeyPress={(e) => { e.key === "Enter" && addTodoItem() }}
        placeholder="Enter your todo here..."
      />
      <Button onClick={() => addTodoItem()}>Add</Button>
    </InputGroup>
  );
};

export default TodoInput;
