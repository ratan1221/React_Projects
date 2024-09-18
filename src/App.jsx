import TaskForm from './Components/TaskForm'
import './App.css'

function App() {
  return (
    <div className='app'>
       <TaskForm />
      <main className='app-main'>
      <section className='task-column'>section 1</section>
      <section className='task-column'>section 2</section>
      <section className='task-column'>section 3</section>
      </main>
    </div>
  )
}

export default App
