import { default as data } from "./../data/data.json";
import Cats from "./Cats.jsx";

function Cards() {
    let catt = data.map((cat) => {
        return <Cats cat={cat} key={cat.id}/>
    });

    return <div className="cards">{catt}</div>;
}

export default Cards;