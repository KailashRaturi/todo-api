import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTasks, deleteTask } from '../actions/taskActions';
import TaskItem from './TaskItem';
import '../utils/index.css';
const TaskList = () => {
    const dispatch = useDispatch();
    const tasks = useSelector(state => state.tasks);

    useEffect(() => {
        dispatch(fetchTasks());
    }, [dispatch]);

    return (
        <div className="container">
            {tasks.map(task => (
                <TaskItem key={task.id} task={task} onDelete={() => dispatch(deleteTask(task.id))} />
            ))}
        </div>
    );
};

export default TaskList;
