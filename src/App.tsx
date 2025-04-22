import { Header } from "./components/Header"
import { ToDoForm } from "./components/ToDoForm"
import { ToDoList } from "./components/ToDoList"
import styles from './App.module.css'

function App() {

  return (
    <div>
      <Header/>
      <div className={styles.container}>
        <main>
          <section>
            <ToDoForm/>
          </section>
          <section>
            <ToDoList/>
          </section>
        </main>
      </div>
    </div>
  )
}

export default App
