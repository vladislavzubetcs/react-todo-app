import styled from 'styled-components';

const TodosList = styled.ul`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 2rem;
`;

const TodosListItem = styled.li`
    width: 100%;
    text-align: center;
    font-weight: 300;

    ${props => props.isCancelled ?
        'text-decoration: line-through;' +
        'color: #222;' +
        'opacity: .2;' :
        'color: #222'};
`;

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
            {
                clientTodos.map((clientTodo, i) => {
                    return (
                        <TodosListItem 
                            key={ i }
                            isCancelled={ clientTodo.isCancelled }
                            onClick={() => changeTodoListItemStatus(clientTodos, i) }>
                            { clientTodo.text }
                        </TodosListItem>
                    );
                })
            }
        </TodosList>
    )
};

export default Todos;