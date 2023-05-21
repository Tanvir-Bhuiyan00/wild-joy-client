import { Helmet } from "react-helmet";
import Banner from "../Banner/Banner";
import Gallary from "../Gallary/Gallary";
import ShopByCategory from "../ShopByCategory/ShopByCategory";
import TopToy from "../TopToy/TopToy";
import TopComments from "../TopComments/TopComments";


const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Home - Wild Joy</title>
      </Helmet>
      <Banner></Banner>
      <Gallary></Gallary>
      <ShopByCategory></ShopByCategory>
      <TopToy></TopToy>
      <TopComments></TopComments>
    </div>
  );
};

export default Home;
