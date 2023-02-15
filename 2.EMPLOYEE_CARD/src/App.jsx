import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Caps from "./components/Caps.jsx";
import Cardas from "./components/Card.jsx";

const isLoggedIn = false;

function App() {

  return (
    <div className="App">
    <Caps /><br />
    {/* <Cardas /><br /> */}
    {isLoggedIn && <Cardas />}
    </div>
  )
}

export default App
