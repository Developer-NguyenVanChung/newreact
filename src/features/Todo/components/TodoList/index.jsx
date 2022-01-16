import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss'

TodoList.propTypes = {
    TodoList: PropTypes.array,
};
TodoList.defaultProps = {
    todoList: []
}

function TodoList({ todoList }) {
    return (
        <>
            <h2>Todo List today</h2>
            <ul>
                {
                    todoList.map(item => (
                        <li key={item.id}>{item.title}</li>
                    ))
                }
            </ul>
        </>
    );
}

export default TodoList;