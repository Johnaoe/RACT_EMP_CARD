import Card from "./Card.jsx"
import { default as data } from "../data/data.json";

function Cards() {
    let cards = data.map((employee) => {
        return <Card employee={employee} key={employee.id}/>
    });

    return <div className="cards">{cards}</div>;
}

export default Cards;