import axios from 'axios';
import { TASK_ADD, TASK_DELETE, TASK_UPDATE, TASK_LIST } from './types';
import store from '../store/configureStore';
export const addTask = (task) => async (dispatch) => {
    const weather = await fetchWeather();
    task.isOutdoor = weather.isOutdoor;
    dispatch({ type: TASK_ADD, payload: task });
    saveToLocalStorage();
};

export const deleteTask = (id) => (dispatch) => {
    dispatch({ type: TASK_DELETE, payload: id });
    saveToLocalStorage();
};

export const updateTask = (task) => (dispatch) => {
    dispatch({ type: TASK_UPDATE, payload: task });
    saveToLocalStorage();
};

export const fetchTasks = () => (dispatch) => {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    dispatch({ type: TASK_LIST, payload: tasks });
};

const fetchWeather = async () => {
    // Call weather API
    const response = await axios.get('https://api.openweathermap.org/data/2.5/weather?q=pune&appid=b3cfb739ccef70317676f3a93cc62131');
    return response.data;
};

const saveToLocalStorage = () => {
    const state = store.getState();
    localStorage.setItem('tasks', JSON.stringify(state.tasks));
};
