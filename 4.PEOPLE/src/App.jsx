import "bootstrap/dist/css/bootstrap.min.css";
import { people } from "./data/people";
import Profile from './components/Profile'
import LikesCounter from "./components/LikesCounter";
import ItemsList from "./components/itemsList";

function App() {
  let profiles = people.map((person) =>{
    return <Profile name={person.name} photo={person.avatar}/>
  })
  return (
    <div className="App">
      <LikesCounter />
      {profiles}
      <ItemsList />
    </div>
  );
}

export default App;
