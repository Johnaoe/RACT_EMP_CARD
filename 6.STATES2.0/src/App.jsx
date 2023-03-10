import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Counter from './components/Counter.jsx';
import Login from './components/Login';
import Todolist from './components/todolist'

function App() {

  return (
    <div className="App">
      <Counter/>
      <br />
      <Todolist />
      <br />
      <Login />
    </div>
  )
}

export default App