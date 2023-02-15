function Cardas({employee}) {

  const flag = true;
  
  return (
<div id="line">
      <div id="image">
        <img src={employee.logo} alt="" />
      </div>
      <ul className='upperText'>
        <li><h1 className='snap'>{employee.company}</h1></li>
        <li>{employee.new && <div><h1 className='new'>new</h1></div>}</li>
        <li>{employee.featured && <div><h1 className='feature'>Featured</h1></div>}</li>
      </ul>
      <div>
      <ul>
        <li><h1>{employee.position}</h1></li>
      </ul>
      </div>
      <ul className='lowerText'>
        <li><h1>{employee.postedAt}</h1></li>
        <li><h1>{employee.contract}</h1></li>
        <li><h1>{employee.location}</h1></li>
      </ul>
  </div>
  
  );
}

export default Cardas;