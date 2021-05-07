import Task from './Task';

const Tasks = ({ taskList, onDelete, setUrgency }) => {
	return (
		<>
			{taskList.map((task) => (
				<Task
					key={task.id}
					task={task}
					onDelete={onDelete}
					setUrgency={setUrgency}
				/>
			))}
		</>
	);
};

export default Tasks;
