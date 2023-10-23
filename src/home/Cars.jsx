import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
const Cars = ({car}) => {
  return (
    <Link to={`/category/${car.name}`}>
      <div className="container m-auto card w-full h-full bg-base-100 shadow-xl image-full">
        <figure>
          <img
            src={car.img_link}
            alt={car.name}
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title m-auto text-3xl md:text-5xl">{car.name}</h2>
        </div>
      </div>
    </Link>
  );
};

Cars.propTypes = {
  car: PropTypes.object,
}

export default Cars;
