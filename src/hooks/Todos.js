const CLIENT_TODOS = "clientTodos";

export const getTodos = () =>
  JSON.parse(localStorage.getItem(CLIENT_TODOS)) ?? [];

export const setTodos = (clientTodos) =>
  localStorage.setItem(CLIENT_TODOS, JSON.stringify(clientTodos ?? []));
