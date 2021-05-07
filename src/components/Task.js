import { FaTimesCircle, FaFontAwesomeFlag } from 'react-icons/fa';

const Task = ({ task, onDelete, setUrgency }) => {
	return (
		<div className={`task ${task.uLevel}`}>
			<h3>
				{task.name}{' '}
				<FaTimesCircle
					onClick={() => onDelete(task.id)}
					style={{ color: 'red', cursor: 'pointer' }}
				/>
			</h3>
			<p>Data de início: {task.start}</p>
			<p>Data de término: {task.end}</p>
			<p>Descrição: {task.description}</p>
			<p>Orçamento: R$ {task.budget}</p>
			<FaFontAwesomeFlag
				onClick={() => setUrgency(task.id, 'urgency2')}
				style={{ color: 'red', cursor: 'pointer' }}
			/>
			<FaFontAwesomeFlag
				onClick={() => setUrgency(task.id, 'urgency1')}
				style={{ color: 'orange', cursor: 'pointer' }}
			/>
			<FaFontAwesomeFlag
				onClick={() => setUrgency(task.id, 'urgency0')}
				style={{ color: 'green', cursor: 'pointer' }}
			/>
		</div>
	);
};

export default Task;
