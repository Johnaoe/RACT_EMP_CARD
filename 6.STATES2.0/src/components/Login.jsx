import { useState } from "react";

function Login() {
  let [name, setName] = useState("");
  let [psw, setPsw] = useState("");
  let [items, setItems] = useState([]);
  let addItem = (e) => {
    e.preventDefault();
    if (name, psw == ""){
        alert("empty field");
    }else{
    setItems([...items, name, psw]);
    
}
setName("");
setPsw("");
  };

  let loginjsx = items.map((item, index)=><li key={index}>{item}</li>)
  return (
    <>
      <br />
      <form onSubmit={addItem}>
        <input
          type="text"
          name="name"
          placeholder="Username"
          value={name}
          onChange={(e) => setName(e.target.value)}
        /><br />
        <input
          type="text"
          name="psw"
          placeholder="Password"
          value={psw}
          onChange={(e) => setPsw(e.target.value)}
        />
        <br />
        <input type="submit" value="LOGIN" />
      </form>
      <ul>{loginjsx}</ul>
    </>
  );
}

export default Login;
