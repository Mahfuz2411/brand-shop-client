import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
const Cars = ({car}) => {
  return (
    <Link to={`/category/${car.name}`} className="container m-auto card w-full h-full bg-base-100 shadow-xl image-full">
      <figure className='w-full'>
        <img
          src={car.img_link}
          alt={car.name}
          className='w-full h-full object-cover'
        />
      </figure>
      <div className="card-body w-full h-full items-center">
      <img src={car.logo} alt="logo" className='md:hidden h-10 w-10 content-center object-cover rounded-full' />
        <h2 className="card-title m-auto text-3xl md:text-3xl">
          <img src={car.logo} alt="logo" className='hidden md:flex h-10 w-10 content-center object-cover rounded-full' />
          {car.name}
        </h2>
      </div>
    </Link>
  );
};

Cars.propTypes = {
  car: PropTypes.object,
}

export default Cars;
