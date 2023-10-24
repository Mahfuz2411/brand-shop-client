import About from "./About";
import Brands from "./Brands";
import Comments from "./Comments";
import Slider from "./Slider";

const Home = () => {
  return (
    <div>
      <Slider></Slider>
      <Brands></Brands>
      <About></About>
      <Comments></Comments>
    </div>
  );
};

export default Home;