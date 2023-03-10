import { cars } from "./../data/cars";
import { useState } from "react";

function CarsFilter() {
  let [carList, setCarList] = useState(cars);
  let [selectedBrand, setSelectedBrand] = useState("");
  let [selectedYear, setSelectedYear] = useState([]);
  // let [selectedPrice, setSelectedPrice] = useState({
  //   priceFrom: "",
  //   priceTo: ""
  // })

  function brandHandler(event) {
    setSelectedBrand(event.target.value);
  }

  function checkBoxHandler(event) {
    if (event.target.checked){
      setSelectedYear([...selectedYear, event.target.value]);
    }else{
      setSelectedYear(
        selectedYear.filter((year)=>year!==event.target.value)
      )
    }
  }

  // function priceHandler(event) {
    
  // }

  let carsjsx = 
  carList
  .filter((car)=>car.name.toLowerCase().includes(selectedBrand.toLowerCase()))
  .filter((car) =>{
  return selectedYear.length?selectedYear.includes(car.release_year.toString()):true})
  .map((car, index) => {
    return (
      <div className="border shadow p-2 m-2 car" key={index}>
        <div>{car.name}</div>
        <div>{car.release_year}</div>
        <div>{car.price}</div>
        <img src={car.url} alt={car.name} className="w-100" />
      </div>
    );
  });

  return (
    <>
      <form>
        {/* brand filter */}
        <h6>Filter by brand:</h6>

        <select
          name="brand-input"
          id="brand-input"
          value={selectedBrand}
          onChange={brandHandler}
        >
          <option value="">All</option>
          <option value="BMW">BMW</option>
          <option value="Audi">Audi</option>
          <option value="VW">VW</option>
        </select>

        <div>
          <h6>Filter by Year:</h6>
          <input type="checkbox" value="2018" onChange={checkBoxHandler}/>
          <span>2018 year</span>
          <br />
          <input type="checkbox" value="2019" onChange={checkBoxHandler}/>
          <span>2019 year</span>
          <br />
          <input type="checkbox" value="2020" onChange={checkBoxHandler}/>
          <span>2020 year</span>
          <br />
        </div>
        <div>
          <h6>Price:</h6>
          <input type="text" placeholder="Price From"/>
          <input type="text" placeholder="Price To"/>
        </div>
      </form>

      {/* for testing purpoises */}
      <div>{selectedBrand}</div>
      <div className="d-flex flex-wrap">{carsjsx}</div>
    </>
  );
}

export default CarsFilter;
