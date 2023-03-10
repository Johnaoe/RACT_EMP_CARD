import {useState} from 'react';

function Counter() {
    let [count, setCount] = useState(0);
    let countLike = (e) => {
      setCount((count) => count +1);
    };
  return (
    <>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut pariatur
        saepe accusamus quasi delectus, esse molestiae nobis nesciunt ducimus.
        Ea porro, id, eaque magni, pariatur nulla sapiente amet consectetur
        temporibus suscipit adipisci sequi. Sequi a beatae accusantium
        cupiditate, doloribus magnam distinctio maxime odit ea veritatis numquam
        expedita quia nulla placeat!
        </p>
        <p>Likes : {count}</p>
        <button onClick={countLike}>Like</button>
      
    </>
  );
}

export default Counter;
