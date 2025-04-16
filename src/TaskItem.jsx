import React from 'react';

function TaskItem({ task, onRemove }) {
    return (
        <li style={{ marginBottom: '10px', display: 'flex', alignItems: 'center' }}>
            <span style={{ flex: 1 }}>{task}</span>
            <button onClick={onRemove} style={{ marginLeft: '10px', padding: '5px' }}>Remove</button>
        </li>
    );
}

export default TaskItem;
