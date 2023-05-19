import { Helmet } from "react-helmet";
import Banner from "../Banner/Banner";
import Gallary from "../Gallary/Gallary";
import ShopByCategory from "../ShopByCategory/ShopByCategory";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Home - Wild Joy</title>
      </Helmet>
      <Banner></Banner>
      <Gallary></Gallary>
      <ShopByCategory></ShopByCategory>
    </div>
  );
};

export default Home;
