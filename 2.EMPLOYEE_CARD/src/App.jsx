import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Caps from "./components/Caps.jsx";
import Cardas from "./components/Cards.jsx";

// import Products from "./components/Products.jsx";

const isLoggedIn = true;

function App() {

  return (
    <div className="App">
    <Caps /><br />
    {/* <Cardas /><br /> */}
    {isLoggedIn && <Cardas />}
    {/* <Products/> */}
    </div>
  )
}

export default App
