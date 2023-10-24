import PropTypes from "prop-types";
import { useContext } from "react";
import { FaRegStar } from 'react-icons/fa'
import { IdContext } from "../Context/IdProvider";
import { Link, useNavigate } from "react-router-dom";

const Cards = ({ car }) => {
  const {setId} = useContext(IdContext);
  const navigate = useNavigate();

  const handleUpdate = async ()=>{
    await setId(car._id);
    navigate(`/category/${car.brand}/${car._id}/update`);
  }
  const handleDetails = async ()=>{
    await setId(car._id);
    navigate(`/category/${car.brand}/${car._id}`)
  }
  return (
    <>
      <div className="container mx-auto card w-full h-full bg-base-100 shadow-xl flex flex-col justify-between">
        <figure className="h-52 bg-slate-700 text-3xl text-white align-middle leading-[208px] text-center">
          <img src={`${car.image}`} alt="image not found" className="h-full w-full content-center object-cover "/>
        </figure>
        <div className="card-body">
          <h2 className="card-title text-3xl capitalize">
            {car.name}
          </h2>
          <div className="badge badge-neutral">{car.brand}</div>
          <div className="flex justify-between">
            <h2 className="text-xl">
              price: ${car.price} 
            </h2>
            <div className="flex justify-between items-center text-xl">
              <FaRegStar />
              <p>{car.rating}</p>
            </div>
            
          </div>
          <div className="card-actions">
            <button onClick={handleUpdate} className="btn btn-neutral w-full">Update</button>
            {/* <button onClick={handleDetails} className="btn btn-neutral w-full">Details</button> */}
            {/* <Link to={`/category/${car.brand}/${car._id}/update`} className="w-full">
              
            </Link> */}
            <Link to={`/category/${car.brand}/${car._id}/details`} className="w-full">
              <button className="btn btn-neutral w-full">Details</button>
            </Link> 
          </div>
        </div>
      </div>
    </>
  );
};

Cards.propTypes = {
  car: PropTypes.object,
};

export default Cards;
