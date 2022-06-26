import React, { useState } from 'react';
import { AiOutlineDelete, AiTwotoneEdit, AiOutlineCheckSquare } from 'react-icons/ai';
import Form from './Form';

const Todo = ({ todos, completeTodo, removeTodo, updateTodo }) => {
    const [edit, setEdit] = useState({
        id: null,
        value: ''
    });

    const submitUpdate = value => {
        updateTodo(edit.id, value);
        setEdit({
            id: null,
            value: ''
        });
    };

    if (edit.id) {
        return <Form edit={edit} onSubmit={submitUpdate} />;
    }

    return todos.map((todo, index) => (
        <div
            className={todo.isComplete ? 'todo-row complete' : 'todo-row'}
            key={index}
        >
            <div>
                {todo.text}
            </div>
            <div className='icons'>
                <AiOutlineCheckSquare
                    onClick={() => completeTodo(todo.id)}
                    key={todo.id}
                />
                <AiOutlineDelete
                    onClick={() => removeTodo(todo.id)}
                    className='delete-icon'
                />
                <AiTwotoneEdit
                    onClick={() => setEdit({ id: todo.id, value: todo.text })}
                    className='edit-icon'
                />
            </div>
        </div>
    ));
};

export default Todo;