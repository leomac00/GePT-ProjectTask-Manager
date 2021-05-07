import { useState, useEffect } from 'react';
import Button from './Button';
import React from 'react';

export const Header = ({ onAdd, showForm, tasks }) => {
	const [myBudget, setMyBudget] = useState(0);
	const [budget, setBudget] = useState(0);
	useEffect(() => {
		let tempB = budget;
		tasks.forEach((task) => {
			tempB = tempB - task.budget;
		});
		setMyBudget(tempB);
	}, [tasks, budget]);

	const onSubmit = (e) => {
		e.preventDefault();
	};

	return (
		<>
			<header className="header">
				<h1>{`GePT - Gerenciamento de projetos e tarefas `}</h1>
				<Button
					color={showForm ? 'red' : 'green'}
					text={showForm ? 'Fechar' : 'Adicionar Tarefa'}
					onClick={onAdd}
				/>
			</header>
			<form onSubmit={onSubmit}>
				<label>
					<h4>Meu orçamento:</h4>
				</label>

				<input
					style={{ fontSize: '16px' }}
					type="number"
					value={budget}
					onChange={(e) => setBudget(e.target.value)}
				></input>
			</form>

			<h4>Orçamento restante: R$ {myBudget}</h4>
		</>
	);
};
