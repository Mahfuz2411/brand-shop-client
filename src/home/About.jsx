const About = () => {
  return (
    <section className="container py-10 mx-auto grid gap-5 w-full px-5">
      <h2 className="container text-center font-bold text-4xl">About us</h2>
      <div className="container grid md:grid-cols-2 m-auto gap-10 w-full p-5">
        <div className="container card bg-base-100 shadow-xl w-full">
          <div className="card-body glass">
            <h2 className="card-title">Buy Accepted Brands</h2>
            <p className="font-normal text-base text-gray-700">
            {"At Brand-Shop, we've carefully curated a selection of the most trusted and renowned car brands in the industry. We believe in quality, reliability, and innovation, and that's why we only offer vehicles from brands that meet our rigorous standards. Whether you're a car enthusiast looking for your dream ride or a first-time buyer in search of a reliable vehicle, we've got you covered. Explore our wide range of accepted brands and find the car that suits your needs and style."}
            </p>
          </div>
        </div>
        <div className="card bg-base-100 shadow-xl w-full">
          <div className="card-body glass">
            <h2 className="card-title"> Sell Your Car</h2>
            <p className="font-normal text-base text-gray-700">
            {"Looking to part ways with your current vehicle? We've got you covered there too! At Brand-Shop], we offer a hassle-free platform for you to list your car for sale. We make the process easy and efficient, so you can reach potential buyers quickly and get the best value for your vehicle. Whether you're upgrading to a new car or simply looking to sell your current one, our platform is the perfect place to connect with interested buyers."}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
