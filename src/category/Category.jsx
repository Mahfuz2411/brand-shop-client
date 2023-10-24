import { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import NotAvail from './NotAvail';
import Cards from './Cards';

const Category = () => {
  const { brand } = useParams();
  const cars = useLoaderData();
  const brandCar = cars.filter((car)=>car.brand.toLowerCase()==brand.toLowerCase());
  return (
    brandCar.length?
    <div className='container m-auto grid md:grid-cols-2 lg:grid-cols-3 grid-rows-1 gap-10 px-10 py-20'>
      {
        brandCar.map((car)=><Cards key={car._id} car={car}></Cards>)
      }
    </div>: 
    <NotAvail></NotAvail>
  );
};

export default Category;