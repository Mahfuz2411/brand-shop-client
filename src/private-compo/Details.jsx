import { useLoaderData } from "react-router-dom";
import { FaLocationDot } from "react-icons/fa6";
import { ImPriceTag } from "react-icons/im";
import { BsFillCalendarFill } from "react-icons/bs";

const Details = () => {
  const car = useLoaderData();
  console.log(car); 
  return (
    <div
      className="pt-10 relative before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-slate-950/80 z-0 flex flex-col justify-between items-center w-full min-h-screen gap-8"
      style={{
        background: `url('${car.image}')`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className=" container mx-auto relative z-10 flex flex-col gap-4 px-4 flex-grow justify-center items-center w-full max-w-4xl">
        <h2 className="text-4xl md:text-5xl text-center font-bold text-white">
          {car.name}
          <div className="badge badge-neutral text-center">{car.brand}</div>
        </h2>
        <p className="text-base text-center font-normal text-slate-200">
          {car.description}
        </p>
      </div>
      <div className="relative z-10 grid md:grid-cols-2 lg:grid-cols-3 w-full">
        <div className="bg-amber-800/80 text-white text-center px-5 py-8 flex flex-col gap-3 justify-center items-center">
          <FaLocationDot className="text-3xl" />
          <h4 className="text-3xl font-semibold">
            {car.price}
          </h4>
          <p className="font-normal text-lg ">Price</p>
        </div>
        <div className="bg-teal-800/80 text-white text-center px-5 py-8 flex flex-col gap-3 justify-center items-center">
          <BsFillCalendarFill className="text-3xl" />
          <h4 className="text-3xl font-semibold">{car.model}</h4>
          <p className="font-normal text-lg ">Model</p>
        </div>
        <div className="bg-purple-800/80 text-white text-center  md:col-span-2 lg:col-span-1 px-5 py-8 flex flex-col gap-3 justify-center items-center">
          <ImPriceTag className="text-3xl" />
          <h4 className="text-3xl font-semibold">
            {car.rating}
          </h4>
          <p className="font-normal text-lg ">Rating</p>
        </div>
      </div>
    </div>
  );
};

export default Details;
