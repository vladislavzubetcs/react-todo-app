import styled from 'styled-components';

import { useRef } from 'react';

const Input = styled.input`
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
        color: #222;
        opacity: .2;
    }
`;

const TodoInput = ({ clientTodos, setClientTodos }) => {
    const inputListener = useRef(null);

    const handleSubmitForm = (e) => {
        e.preventDefault();

        if (!inputListener.current.value) {
            alert('Please enter todo before');
            return;
        }

        let clientTodo = {
            text: inputListener.current.value,
            isCancelled: false,
        }

        inputListener.current.value = '';

        if (!clientTodos) {
            setClientTodos([clientTodo]);
        } else {
            setClientTodos([clientTodo, ...clientTodos]);
        }
    }

    return (
        <form onSubmit={(e) => handleSubmitForm(e) } >
            <Input ref={ inputListener } placeholder="Enter your todo here..." />
        </form>
    )
};

export default TodoInput;