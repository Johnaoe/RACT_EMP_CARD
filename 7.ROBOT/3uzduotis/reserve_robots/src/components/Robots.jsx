import {robotList} from "./../data/robots";
import Robot from "./Robot";

function Robots() {
  let robots = robotList.map((robot) => {
    return <Robot key={robot.id} robot={robot} />;
  });

  return <div className="d-flex flex-wrap gap-2">{robots}</div>;
}

export default Robots;
