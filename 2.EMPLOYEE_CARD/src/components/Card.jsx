import img from '../assets/insure.svg';

function Cardas() {
  return (
<div id="line">
      <div id="image">
        <img src={img} alt="" />
      </div>
      <ul className='upperText'>
        <li><h1 className='snap'>PHOTOSNAP</h1></li>
        <li><h1 className='new'>NEW!</h1></li>
        <li><h1 className='feature'>FEATURE</h1></li>
      </ul>
      <div>
      <ul>
        <li><h1>Front-End Developer</h1></li>
      </ul>
      </div>
      <ul className='lowerText'>
        <li><h1>5d. ago</h1></li>
        <li><h1>Full Time</h1></li>
        <li><h1>USA only</h1></li>
      </ul>
  </div>
  
  );
}

export default Cardas;