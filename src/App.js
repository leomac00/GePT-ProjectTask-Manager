import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import TimeLine from 'react-gantt-timeline';
import AddTask from './components/AddTask';
import Tasks from './components/Tasks';

function App() {
	const [showForm, setShowForm] = useState(false);
	const [tasks, setTasks] = useState([]);
	useEffect(() => {
		const getTasks = async () => {
			const taskList = await fetchTasks();
			setTasks(taskList);
		};
		getTasks();
	}, []);

	//Fetch list of tasks from server
	const fetchTasks = async () => {
		const res = await fetch('http://localhost:5000/tasks');
		const data = await res.json();
		return data;
	};
	//Fetch single task from server
	const fetchTask = async (id) => {
		const res = await fetch(`http://localhost:5000/tasks/${id}`);
		const data = await res.json();
		return data;
	};
	//Add Task
	const addTask = async (t) => {
		const res = await fetch(`http://localhost:5000/tasks/`, {
			method: 'POST',
			headers: {
				'Content-type': 'application/json',
			},
			body: JSON.stringify(t),
		});
		const data = await res.json();
		setTasks([...tasks, data]);
	};
	//Delete Tasks
	const deleteTask = async (id) => {
		await fetch(`http://localhost:5000/tasks/${id}`, { method: 'DELETE' });

		setTasks(tasks.filter((task) => task.id !== id));
	};
	//Set urgency level
	const setUrgency = async (id, uLevel) => {
		const taskToSet = await fetchTask(id);
		let color;
		switch (uLevel) {
			case 'urgency0':
				color = 'green';
				break;
			case 'urgency1':
				color = 'orange';
				break;
			case 'urgency2':
				color = 'red';
				break;
		}
		const updTask = await { ...taskToSet, uLevel: uLevel, color: color };

		const res = await fetch(`http://localhost:5000/tasks/${id}`, {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(updTask),
		});

		const data = await res.json();

		setTasks(
			tasks.map((task) =>
				task.id === id
					? { ...task, uLevel: data.uLevel, color: data.color }
					: task
			)
		);
	};

	let links = [];
	//Render
	return (
		<div className="container">
			<Header
				tasks={tasks}
				showForm={showForm}
				onAdd={() => setShowForm(!showForm)}
			/>

			{showForm ? <AddTask onAdd={addTask} /> : ''}

			{tasks.length > 0 ? (
				<Tasks taskList={tasks} onDelete={deleteTask} setUrgency={setUrgency} />
			) : (
				'Todas as tarefas foram feitas!'
			)}
			<div className="time-line-container">
				<TimeLine mode="month" data={tasks} />
			</div>
		</div>
	);
}

export default App;
