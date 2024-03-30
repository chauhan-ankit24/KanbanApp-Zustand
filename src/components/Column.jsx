import './Column.css';
import Task from './Task';
import { useStore } from '../store';

export default function Column({ state }) {
    const tasks = useStore((store) =>
        store.tasks.filter((task) => task.state === state)
    );
    console.log(tasks);
    return (
        <div className="column">
            <p>{state}</p>
            {tasks.map((task) => (
                <Task title={task.title} key={task.title} />
            ))}
        </div>
    );
}
