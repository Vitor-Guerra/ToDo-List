import { PlusCircle } from '@phosphor-icons/react'
import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react'
import styles from './ToDoForm.module.css'
import { TaskType } from '../App';

interface TaskProps {
    onInsertNewTask: (task: TaskType) => void;
}


export const ToDoForm = ({onInsertNewTask}: TaskProps) => {
    const [newTask, setNewTask] = useState('')

    const handleChangeInputTask = (e: ChangeEvent<HTMLInputElement>) => {
        e.target.setCustomValidity('')
        setNewTask(e.target.value)
    }

    const handleInvalidInputTask = (e: InvalidEvent<HTMLInputElement>) => {
        e.target.setCustomValidity('Esse campo não pode ficar vázio!')
    }
    
    const handleCreateNewTask = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        onInsertNewTask({
            id: Math.random().toString(36).substring(2, 9),
            content: newTask,
            status: 'active'
        })
        
        setNewTask("")
    }




    return(
        <article className={styles.ToDoForm}>
            <form onSubmit={handleCreateNewTask} className={styles.TaskForm}>
                
                <input 
                    type="text" 
                    placeholder="Adicione uma nova tarefa"
                    onChange={handleChangeInputTask}
                    onInvalid={handleInvalidInputTask}
                    value={newTask || ''}
                    required
                />
                
                <button disabled={newTask === ""}>
                    <strong>Criar</strong>
                    <PlusCircle weight='bold' size={18} />
                </button>

            </form>
        </article>
    )
}