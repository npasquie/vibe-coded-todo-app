import React from 'react';

interface TaskItemProps {
    task: string;
    onRemove: () => void;
}

function TaskItem({ task, onRemove }: TaskItemProps) {
    return (
        <li style={{ marginBottom: '10px', display: 'flex', alignItems: 'center' }}>
            <span style={{ flex: 1 }}>{task}</span>
            <button onClick={onRemove} style={{ marginLeft: '10px', padding: '5px' }}>Remove</button>
        </li>
    );
}

export default TaskItem;