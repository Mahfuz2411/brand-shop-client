import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import Cards from "../category/Cards";

const Mcards = ({cart}) => {
  const [car, setCar] = useState({});

  // console.log(cart);

  useEffect(()=>{
    fetch(`http://localhost:5000/cars/${cart.id}`)
    .then(res=>res.json())
    .then(data=>setCar(data))
  }, []);

  // console.log(car);

  return (
    <>
      <Cards car={car}></Cards>
    </>
  );
};

Mcards.propTypes = {
  cart: PropTypes.object,
};

export default Mcards;