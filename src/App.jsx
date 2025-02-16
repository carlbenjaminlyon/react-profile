import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './styles/App.css';
import ButtonTest from './assets/components/Button';
import Profile from './assets/components/Profile';


function App() {

	return (
		<div>
			<Profile />
			<ButtonTest />
		</div>
	);
};

export default App;