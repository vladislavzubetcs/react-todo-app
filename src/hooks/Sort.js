const SORT_BY = "sortBy";

export const SORT_TYPES = {
  COMPLETED: "sort by Completed",
  UNCOMPLETED: "sort by Uncompleted",
};

export const getSort = () =>
  JSON.parse(localStorage.getItem(SORT_BY)) ?? SORT_TYPES.COMPLETED;

export const setSort = (sortBy) =>
  localStorage.setItem(SORT_BY, JSON.stringify(sortBy ?? SORT_TYPES.COMPLETED));

export const sort = (clientTodos, setClientTodos) => {
  let sortedBy = getSort();

  if (sortedBy === SORT_TYPES.UNCOMPLETED) {
    clientTodos.sort((a, b) => +a.isCancelled - +b.isCancelled);
    sortedBy = SORT_TYPES.COMPLETED;
  } else {
    clientTodos.sort((a, b) => +b.isCancelled - +a.isCancelled);
    sortedBy = SORT_TYPES.UNCOMPLETED;
  }

  setClientTodos([...clientTodos]);

  return sortedBy;
};
