import React from 'react';

const TaskItem = ({ task, onDelete }) => {
    return (
        <div className={`task-item ${task.priority}-priority`}>
            <span>{task.name}</span>
            <button onClick={onDelete}>Delete</button>
        </div>
    );
};

export default TaskItem;
