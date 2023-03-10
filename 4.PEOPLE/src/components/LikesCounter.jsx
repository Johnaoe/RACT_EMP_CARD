import likeIcon from "./../assets/comment-like-color-icon.svg";
import { useState } from 'react';
function LikesCounter() {
    // hook useState
    let [count, setCount] = useState(0);

function countLikes(){
    setCount((count) => count++)

}

  return (
    <div style={{width: "300px", textAlign: "center"}}>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam voluptate
        cum quia magnam optio! Distinctio quas enim veniam exercitationem,
        repellendus nobis omnis laborum, corrupti cum debitis fugit est autem
        animi hic nisi aut suscipit illo itaque magnam repudiandae nam
        voluptatibus, deserunt quia assumenda! Fugit recusandae modi quibusdam
        voluptatum ipsam corporis!
      </p>
      <p>Likes: {count}]</p>
      <img src={likeIcon} alt="like" style={{width: "20%"}} onClick={countLikes}/>
    </div>
  );
}

export default LikesCounter;
