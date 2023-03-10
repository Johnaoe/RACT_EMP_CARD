import Button from "react-bootstrap/Button";
import { useState } from "react";

function Robot({ robot }) {
  let [reserved, setReserved] = useState(robot.reserved);

  function makeReserved() {
    setReserved((previosReserved => !previosReserved));    
  }

  return (
    <div
      className={reserved ? "grayscale" : ""}
      style={{ backgroundColor: "green", padding: "20px", textAlign: "center" }}
    >
      <img src={robot.avatar} alt="" />
      <p className="h3">{robot.name}</p>
      <p>{robot.email}</p>

      {reserved ? (
        <span className="reserved">Reserved</span>
      ) : (
        <Button variant="info" onClick={makeReserved}>
          Reserve
        </Button>
      )}
    </div>
  );
}

export default Robot;
