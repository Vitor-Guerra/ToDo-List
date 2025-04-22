import { ClipboardText } from '@phosphor-icons/react'
import styles from './ToDoList.module.css'


export const ToDoList = () => {
    return(
        <article className={styles.ToDoList}>
            <header className={styles.Header}>
                <div>
                    <strong>Tarefas criadas</strong>
                    <span>0</span>
                </div>
                <div>
                    <strong>Concluídas</strong>
                    <span>0</span>
                </div>
            </header>
            <main className={styles.Main}>
                <div>
                    <ClipboardText size={60} />
                    <p className={styles.EmptyList}>
                        <strong>Você ainda não tem tarefas cadastradas</strong>
                        <span>Crie tarefas e organize seus itens a fazer</span>
                    </p>
                </div>
            </main>
        </article>
    )
}