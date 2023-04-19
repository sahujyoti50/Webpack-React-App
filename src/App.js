import React from "react";
import CarsInfo from '../cars.json';
const App = () => {
let count=1;
  return(
    <div className="carList">
        {CarsInfo.map((car)=>(
        <ul key={car.id} className={`carDetails list-${count++}`}>
            <h4>{car.modelName}</h4>
            <img src={car.imageUrl}/>
            <li>{car.bodyType} - {car.modelType}</li>
            <li><b>{car.price}</b></li>
           
        </ul>
        ))}
    </div>
  )
};
 
export default App;