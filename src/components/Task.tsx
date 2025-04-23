import { Trash } from '@phosphor-icons/react'
import styles from './Task.module.css'
import { TaskType } from '../App'

interface TaskListProps{
    task: TaskType,
    onUpdateTask: (id: string) => void;
    onDeleteTask: (id: string) => void;
}

export const Task = ({task, onDeleteTask, onUpdateTask}: TaskListProps) => {
    return(
        <div className={styles.Task}>
            <label className={styles.Checkbox}>
                <input type="checkbox"  onChange={() => onUpdateTask(task.id)}/>
                <span>
                    <svg viewBox="0 0 9 7"  xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.93059 0.342092L3.59865 4.67403L1.11618 2.19156L0.280273 3.02747L3.59865 6.34584L8.76649 1.178L7.93059 0.342092Z"/>
                    </svg>
                </span>
            </label>
            
            <p className={task.status === 'done' ? styles.Done : styles.Active}>
                {task.content}
            </p>
            
            <button title="Deletar tarefa" onClick={() => onDeleteTask(task.id)}>
                <Trash size={18}/>
            </button>
        </div>
    )
}