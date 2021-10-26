import './App.css'
import Todos from './components/Todos';
import TodoInput from './components/TodoInput';

const App = () => {

  return (
    <div className="App">
      <Todos/>
      <TodoInput/>
    </div>
  )
}

export default App
