import { TASK_ADD, TASK_DELETE, TASK_UPDATE, TASK_LIST } from '../actions/types';

const initialState = {
    tasks: []
};

const taskReducer = (state = initialState, action) => {
    switch (action.type) {
        case TASK_ADD:
            return { ...state, tasks: [...state.tasks, action.payload] };
        case TASK_DELETE:
            return { ...state, tasks: state.tasks.filter(task => task.id !== action.payload) };
        case TASK_UPDATE:
            return {
                ...state,
                tasks: state.tasks.map(task =>
                    task.id === action.payload.id ? action.payload : task
                )
            };
        case TASK_LIST:
            return { ...state, tasks: action.payload };
        default:
            return state;
    }
};

export default taskReducer;
