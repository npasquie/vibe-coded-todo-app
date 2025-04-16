import React, { useState } from 'react';
import Title from './Title';
import TaskItem from './TaskItem';

const futuristicStyles = {
    container: {
        padding: '20px',
        fontFamily: 'Arial, sans-serif',
        background: 'linear-gradient(135deg, #1f1c2c, #928dab)',
        color: '#fff',
        minHeight: '100vh',
    },
    input: {
        padding: '10px',
        width: '300px',
        marginRight: '10px',
        borderRadius: '5px',
        border: 'none',
        outline: 'none',
        background: '#2c2c54',
        color: '#fff',
    },
    button: {
        padding: '10px',
        borderRadius: '5px',
        border: 'none',
        background: 'linear-gradient(135deg, #6a11cb, #2575fc)',
        color: '#fff',
        cursor: 'pointer',
        transition: 'transform 0.2s',
    },
    list: {
        marginTop: '20px',
        listStyleType: 'none',
        padding: 0,
    },
    listItem: {
        marginBottom: '10px',
        display: 'flex',
        alignItems: 'center',
        background: '#2c2c54',
        padding: '10px',
        borderRadius: '5px',
    },
    removeButton: {
        marginLeft: '10px',
        padding: '5px',
        borderRadius: '5px',
        border: 'none',
        background: 'linear-gradient(135deg, #ff416c, #ff4b2b)',
        color: '#fff',
        cursor: 'pointer',
        transition: 'transform 0.2s',
    },
};

interface TaskItemProps {
    task: string;
    onRemove: () => void;
}

function App() {
    const [tasks, setTasks] = useState<string[]>([]);
    const [task, setTask] = useState<string>('');

    const addTask = () => {
        if (task.trim()) {
            setTasks([...tasks, task]);
            setTask('');
        }
    };

    const removeTask = (index: number) => {
        const newTasks = tasks.filter((_, i) => i !== index);
        setTasks(newTasks);
    };

    const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            addTask();
        }
    };

    return (
        <div style={futuristicStyles.container}>
            <Title />
            <div>
                <input
                    type="text"
                    value={task}
                    onChange={(e) => setTask(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Enter a task"
                    style={futuristicStyles.input}
                />
                <button
                    onClick={addTask}
                    style={futuristicStyles.button}
                    onMouseOver={(e) => (e.target.style.transform = 'scale(1.1)')}
                    onMouseOut={(e) => (e.target.style.transform = 'scale(1)')}
                >
                    Add Task
                </button>
            </div>
            <ul style={futuristicStyles.list}>
                {tasks.map((t, index) => (
                    <TaskItem
                        key={index}
                        task={t}
                        onRemove={() => removeTask(index)}
                    />
                ))}
            </ul>
        </div>
    );
}

export default App;