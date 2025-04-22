import { PlusCircle } from '@phosphor-icons/react'
import styles from './ToDoForm.module.css'


export const ToDoForm = () => {
    return(
        <article className={styles.ToDoForm}>
            <form className={styles.TaskForm}>
                <input type="text" placeholder="Adicione uma nova tarefa"/>
                <button>
                    <strong>Criar</strong>
                    <PlusCircle weight='bold' size={18} />
                </button>
            </form>
        </article>
    )
}