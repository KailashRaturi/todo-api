import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TaskList from './components/TaskList';
import TaskInput from './components/TaskInput';
import LoginPage from './components/LoginPage';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/tasks" element={<><TaskInput /><TaskList /></>} />
                <Route path="/" element={<LoginPage />} />
            </Routes>
        </Router>
    );
};

export default App;
