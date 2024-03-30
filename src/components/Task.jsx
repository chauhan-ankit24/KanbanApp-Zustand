import classNames from 'classnames'
import { useStore } from '../store'
import './Task.css'
import deleteImage from '../assets/delete.svg'

export default function Task({ title }) {
    const task = useStore((store) =>
        store.tasks.find((task) => task.title === title)
    );

    const deleteTask = useStore((store) => store.deleteTask);
    const setDraggedTask = useStore((store) => store.setDraggedTask);

    return (
        <div className="task" draggable onDragStart={() => { setDraggedTask(task.title) }} >
            <div> {task.title}</div>
            <div>
                <div className='bottomWrapper'>
                    <img src={deleteImage} onClick={() => deleteTask(task.title)} />
                </div>
                <div className={classNames('status', task.state)}>
                    {task.state}
                </div>
            </div>
        </div>
    )
}