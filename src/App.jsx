import React, { useState } from 'react';

function App() {
    const [tasks, setTasks] = useState([]);
    const [task, setTask] = useState('');

    const addTask = () => {
        if (task.trim()) {
            setTasks([...tasks, task]);
            setTask('');
        }
    };

    const removeTask = (index) => {
        const newTasks = tasks.filter((_, i) => i !== index);
        setTasks(newTasks);
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            addTask();
        }
    };

    return (
        <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
            <h1>To-Do App</h1>
            <div>
                <input
                    type="text"
                    value={task}
                    onChange={(e) => setTask(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Enter a task"
                    style={{ padding: '10px', width: '300px', marginRight: '10px' }}
                />
                <button onClick={addTask} style={{ padding: '10px' }}>Add Task</button>
            </div>
            <ul style={{ marginTop: '20px', listStyleType: 'none', padding: 0 }}>
                {tasks.map((t, index) => (
                    <li key={index} style={{ marginBottom: '10px', display: 'flex', alignItems: 'center' }}>
                        <span style={{ flex: 1 }}>{t}</span>
                        <button onClick={() => removeTask(index)} style={{ marginLeft: '10px', padding: '5px' }}>Remove</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default App;
