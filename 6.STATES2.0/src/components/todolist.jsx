import { useState } from "react";

function Todolist() {
  let [name, setName] = useState("");
  let [items, setItems] = useState([]);
  let addItem = (e) => {
    e.preventDefault();
    if (name == ""){
        alert("empty field");
    }else{
    setItems([...items, name]);
}
setName("");
  };

  let itemsjsx = items.map((item, index)=><li key={index}>{item}</li>)
  return (
    <>
      <br />
      <form onSubmit={addItem}>
        <input
          type="text"
          name="todo"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <input type="submit" value="ADD" />
      </form>
      <ul>{itemsjsx}</ul>
    </>
  );
}

export default Todolist;
