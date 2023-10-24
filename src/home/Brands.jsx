import React, { useEffect, useState } from 'react';
import Cars from './Cars';

const Brands = () => {
  const [cars, setCars] = useState([]);
  useEffect(()=>{
    fetch('https://raw.githubusercontent.com/Mahfuz2411/jsonplaceholder/main/carsbrand.json')
    .then(res=>res.json())
    .then(data=>setCars(data));
  },[]);

  return (
    <div className='container m-auto grid md:grid-cols-2 lg:grid-cols-3 gap-10 px-10 py-20'>
      {
        cars.map((car)=><Cars key={car.id} car={car}></Cars>)
      }
    </div>
  );
};

export default Brands;