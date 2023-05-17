import { Link } from "react-router-dom";
import banner1 from "../../../assets/banner1.png";
const Banner = () => {
  return (
    <div className="hero bg-base-200">
      <div className="hero-content flex-col gap-10 lg:flex-row">
        <div>
          <img src={banner1} className="image-full" />
        </div>
        <div>
          <h1 className="text-5xl text-wildJoyColorTwo font-extrabold font-display">
            Wild Joy: Fun Unleashed!
          </h1>
          <p className="py-6 text-wildJoyColorTwo font-medium">
            Embrace the Wild. Discover Joy. Play with Animal Toys!
          </p>
          <Link to="/login">
          <button className="py-2 px-5 text-wildJoyColorThree  font-bold  rounded-xl border-2 border-wildJoyColorThree">
            Login Now
          </button>
        </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
