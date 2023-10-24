import { useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";
import { IdContext } from "../Context/IdProvider";
import { useLoaderData, useNavigate } from "react-router-dom";

const Update = () => {
  const car = useLoaderData();
  console.log(car);

  

  const handleUpdateCar = (event) => {
    event.preventDefault();

    const form = event.target;

    const name = form.Name.value;
    const price = form.Price.value;
    const brand = form.Brand.value;
    const model = form.Model.value;
    const image = form.Image.value;
    const rating = form.Rating.value;
    const description = form.Description.value;

    const newCar = { name, price, brand, model, image, rating, description };

    if (
      !name ||
      !price ||
      !brand ||
      !model ||
      !image ||
      !rating ||
      !description
    ) {
      Swal.fire({
        title: "Error",
        text: "Fields can't be empty",
        icon: "error",
        confirmButtonText: "Ok",
      });
    } else if (
      ![
        "bugatti",
        "mclaren",
        "farrari",
        "roles royce",
        "lamborgini",
        "range rover",
      ].includes(brand.toLowerCase())
    ) {
      Swal.fire({
        title: "Error",
        text: "We don't accept your given brand",
        icon: "error",
        confirmButtonText: "Ok",
      });
    } else {
      fetch(`http://localhost:5000/cars/${car._id}`, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(newCar),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.modifiedCount) {
            Swal.fire({
              title: "Succes",
              text: "Car updated succesfully",
              icon: "success",
              confirmButtonText: "Ok",
            });
            form.reset();
          }
        });
    }
  };

  return (
    <div className="bg-[#F4F3F0] md:p-24">
      <h1 className="text-3xl font-extrabold text-center">Update CAR</h1>
      <form onSubmit={handleUpdateCar} action="">
        {/* Form name and Price row*/}
        <div className="md:flex">
          <div className="form-control w-full p-10">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <div className="join">
              <input
                type="text"
                name="Name"
                defaultValue={car.name}
                className="input input-bordered join-item w-full"
                placeholder="Name"
              />
            </div>
          </div>
          <div className="form-control w-full p-10">
            <label className="label">
              <span className="label-text">Price</span>
            </label>
            <div className="join">
              <input
                type="number"
                name="Price"
                defaultValue={car.price}
                className="input input-bordered join-item w-full"
                placeholder="Price"
              />
            </div>
          </div>
        </div>
        {/* Form Brand Name and Model row*/}
        <div className="md:flex">
          <div className="form-control w-full p-10">
            <label className="label">
              <span className="label-text">Brand Name</span>
            </label>
            <div className="join">
              <input
                type="text"
                name="Brand"
                defaultValue={car.brand}
                className="input input-bordered join-item w-full"
                placeholder="Brand Name"
              />
            </div>
          </div>
          <div className="form-control w-full p-10">
            <label className="label">
              <span className="label-text">Model</span>
            </label>
            <div className="join">
              <input
                type="text"
                name="Model"
                defaultValue={car.model}
                className="input input-bordered join-item w-full"
                placeholder="Model"
              />
            </div>
          </div>
        </div>
        {/* Form Image URL and Rating row*/}
        <div className="md:flex">
          <div className="form-control w-full p-10">
            <label className="label">
              <span className="label-text">Image URL</span>
            </label>
            <div className="join">
              <input
                type="text"
                name="Image"
                defaultValue={car.image}
                className="input input-bordered join-item w-full"
                placeholder="Image URL"
              />
            </div>
          </div>
          <div className="form-control w-full p-10">
            <label className="label">
              <span className="label-text">Rating</span>
            </label>
            <div className="join">
              <input
                type="text"
                name="Rating"
                defaultValue={car.rating}
                className="input input-bordered join-item w-full"
                placeholder="Rating (1-5)"
              />
            </div>
          </div>
        </div>
        {/* Form Short Description row*/}
        <div className="md:flex">
          <div className="form-control w-full p-10">
            <label className="label">
              <span className="label-text">Short description</span>
            </label>
            <div className="join">
              <input
                type="text"
                name="Description"
                defaultValue={car.description}
                className="input input-bordered join-item w-full"
                placeholder="Short description"
              />
            </div>
          </div>
        </div>
        <div className="form-control w-full p-10">
          <div className="join">
            <input
              type="submit"
              name="Submit"
              className="btn btn-block btn-primary"
              value="Update Car"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default Update;
