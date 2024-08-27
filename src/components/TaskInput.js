import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../actions/taskActions';

const TaskInput = () => {
    const [taskName, setTaskName] = useState('');
    const [priority, setPriority] = useState('low');
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        const newTask = {
            id: Date.now(),
            name: taskName,
            priority
        };
        dispatch(addTask(newTask));
        setTaskName('');
        setPriority('low');
    };

    return (
        <div className="container">
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={taskName}
                    onChange={(e) => setTaskName(e.target.value)}
                    placeholder="Enter task"
                    required
                />
                <select value={priority} onChange={(e) => setPriority(e.target.value)}>
                    <option value="low">Low</option>
                    <option value="high">High</option>
                </select>
                <input type="submit" value="Add Task" />
            </form>
        </div>
    );
};

export default TaskInput;
