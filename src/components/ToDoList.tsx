import { ClipboardText } from '@phosphor-icons/react'
import styles from './ToDoList.module.css'
import { TaskType } from '../App'
import { Task } from './Task'

export interface taskListProps{
    taskList: TaskType[]
    onUpdateTask: (id: string) => void;
    onDeleteTask: (id: string) => void;
}


export const ToDoList = ({taskList, onDeleteTask, onUpdateTask}: taskListProps) => {

    const taskListIsEmpty = taskList.length === 0

    const taskListIsDone = taskList.filter(item => item.status === 'done')

    return(
        <article className={styles.ToDoList}>
            <header className={styles.Header}>
                <div>
                    <strong>Tarefas criadas</strong>
                    <span>{taskList.length}</span>
                </div>
                <div>
                    <strong>Concluídas</strong>
                    <span>
                        {!taskListIsEmpty 
                        ? `${taskListIsDone.length} de ${taskList.length}`
                        : taskList.length
                        }
                    </span>
                </div>
            </header>
            <main className={styles.Main}>
                {taskListIsEmpty 
                ? <section className={styles.EmptySection}>
                        <div>
                            <ClipboardText size={60} />
                            <p className={styles.EmptyList}>
                                <strong>Você ainda não tem tarefas cadastradas</strong>
                                <span>Crie tarefas e organize seus itens a fazer</span>
                            </p>
                        </div>
                    </section>
                : <section className={styles.FilledList}>
                        <div>
                            {taskList.map(taskItem => (
                                <Task
                                    key={taskItem.id}
                                    task={taskItem}
                                    onDeleteTask={onDeleteTask}
                                    onUpdateTask={onUpdateTask}
                                />
                            ))}
                        </div>
                    </section>
                }
                
            </main>
        </article>
    )
}