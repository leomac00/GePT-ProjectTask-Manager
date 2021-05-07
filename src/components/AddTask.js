import { FaFontAwesomeFlag } from 'react-icons/fa';
import { useState } from 'react';

const AddTask = ({ onAdd }) => {
	const [description, setDescription] = useState('');
	const [uLevel, setULevel] = useState('urgency0');
	const [color, setColor] = useState('black');
	const [budget, setBudget] = useState(0);
	const [start, setStart] = useState('');
	const [name, setName] = useState('');
	const [end, setEnd] = useState('');

	const onSubmit = (e) => {
		e.preventDefault();

		if (!name || !budget) {
			alert('Por favor preencha corretamente');
			return;
		}

		onAdd({ name, start, end, description, uLevel, budget, color });

		setULevel('urgency0');
		setDescription('');
		setColor('black');
		setStart('');
		setName('');
		setBudget();
		setEnd('');
	};

	return (
		<form className="add-form" onSubmit={onSubmit}>
			<div className="form-control">
				<label>Titulo</label>
				<input
					type="text"
					placeholder="Titulo"
					value={name}
					onChange={(e) => setName(e.target.value)}
				/>
			</div>
			<div className="form-control">
				<label>Data de início</label>
				<input
					type="date"
					value={start} //--------------------------------------
					onChange={(e) => setStart(e.target.value)}
				/>
			</div>
			<div className="form-control">
				<label>Data de término</label>
				<input
					type="date"
					value={end}
					onChange={(e) => setEnd(e.target.value)}
				/>
			</div>
			<div className="form-control">
				<label>Descrição</label>
				<input
					type="text"
					placeholder="Descrição"
					value={description}
					onChange={(e) => setDescription(e.target.value)}
				/>
			</div>
			<div className="form-control">
				<label>Custo total</label>
				<input
					type="number"
					value={budget}
					placeholder="0.00"
					onChange={(e) => setBudget(e.target.value)}
				/>
			</div>
			<div className="form-control form-control-check">
				<label>Urgência</label>
				<input
					type="radio"
					id="urgency2"
					name="urgency"
					value="urgency2"
					onChange={(e) => {
						setULevel(e.currentTarget.value);
						setColor('red');
					}}
				/>
				<label>
					<FaFontAwesomeFlag style={{ color: 'red' }} />
				</label>
				<input
					type="radio"
					id="urgency1"
					name="urgency"
					value="urgency1"
					onChange={(e) => {
						setULevel(e.currentTarget.value);
						setColor('orange');
					}}
				/>
				<label>
					<FaFontAwesomeFlag style={{ color: 'orange' }} />
				</label>
				<input
					type="radio"
					id="urgency0"
					name="urgency"
					value="urgency0"
					onChange={(e) => {
						setULevel(e.currentTarget.value);
						setColor('green');
					}}
				/>
				<label>
					<FaFontAwesomeFlag style={{ color: 'green' }} />
				</label>
			</div>
			<input type="submit" value="Adicionar tarefa" className="btn btn-block" />
		</form>
	);
};

export default AddTask;
