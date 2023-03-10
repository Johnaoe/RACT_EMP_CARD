import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useState } from "react";

function ItemsList() {
    const [itemName, setItemName] = useState("");
    console.log(itemName);

    function setName(name){
        setItemName(name)
    }
  return (
    <Form style={{ width: "300px" }}>
      <Form.Label>Type item name</Form.Label>
      <Form.Control type="text" value={itemName} onChange={(e)=>setName(e.target.value)}/>
      <Button variant="primary" type="submit">
        Add to list
      </Button>
    </Form>
  );
}

export default ItemsList;
