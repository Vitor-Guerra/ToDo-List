import { Header } from "./components/Header"
import { ToDoForm } from "./components/ToDoForm"
import { ToDoList } from "./components/ToDoList"
import styles from './App.module.css'
import { useState } from "react"

export interface TaskType {
  id: string;
  content: string;
  status: 'active' | 'done';
}

function App() {

  const [taskList, setTaskList] = useState<TaskType[]>([])

  const handleInsertNewTask = (newTask: TaskType) => {
    setTaskList([...taskList, newTask])
  }

  const handleUpdateTask = (taskUpdated: string) => {
    setTaskList((prevTasks) => (
      prevTasks.map(task => (
        task.id === taskUpdated
          ? { ...task, status: task.status === 'active' ? 'done' : 'active' }
          : task
      ))
    ))
  }

  const handleDeleteTask = (taskDeleted: string) => {
    setTaskList((prevTasks) => prevTasks.filter((task) => task.id !== taskDeleted));
  }

  return (
    <div>
      <Header/>
      <div className={styles.container}>
        <main>
          <section>
            <ToDoForm
              onInsertNewTask={handleInsertNewTask}
            />
          </section>
          <section>
            <ToDoList
              taskList={taskList}
              onUpdateTask={handleUpdateTask}
              onDeleteTask={handleDeleteTask}
            />
          </section>
        </main>
      </div>
    </div>
  )
}

export default App
