import { Link, useLoaderData } from "react-router-dom";
import {  FaRegStar } from "react-icons/fa6";
import { BsFillCartFill } from "react-icons/bs";
import Swal from "sweetalert2";
import { useContext } from "react";
import { AuthContext } from "../Context/AuthProvider";

const Details = () => {
  const car = useLoaderData();
  // console.log(car);
  const { user } = useContext(AuthContext);

  const handleAddToCart = () => {
    const {_id} = car;
    const id = _id;
    const {email} = user;
    const newCart = { id, email };
    fetch(`http://localhost:5000/cartlist`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newCart),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data) {
          Swal.fire({
            icon: "success",
            title: "Done",
            text: "Added To Cart Successfully!",
          });
        } else {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Unsuccessfull",
          });
        }
      })
      .catch((error) => {
        console.log(error);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: error.message,
        });
      });
  };

  return (
    <div className="mx-auto pb-20">
      <figure className="w-full shadow-2xl">
        <img
          src={car.image}
          alt={car.brand}
          className="w-full h-full object-cover"
        />
      </figure>
      <figcaption className="container mx-auto flex flex-col justify-center items-start gap-3 pt-10">
        <h3 className="capitalize text-4xl font-semibold text-gray-900 dark:text-white">
          {car.name}
        </h3>
        <p className="text-gray-700 dark:text-gray-200 font-medium text-xl">
          Price: ${car.price}
        </p>
        <p className="text-gray-700 dark:text-gray-200 font-medium text-xl flex items-center gap-1">
          {car.rating}<FaRegStar /> 
        </p>
        <Link to={`/category/${car.brand}`}>
          <div className="badge badge-neutral">{car.brand}</div>
          <div className="badge badge-neutral">{car.model}</div>
        </Link>
        <p className="text-gray-700 dark:text-gray-100">{car.description}</p>
        <button className="btn btn-neutral flex gap-3 " onClick={handleAddToCart} >
          <BsFillCartFill className="text-2xl" /> Add To Cart
        </button>
      </figcaption>
    </div>
  );
};

export default Details;
