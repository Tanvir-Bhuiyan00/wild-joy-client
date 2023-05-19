import { Helmet } from "react-helmet";
import Banner from "../Banner/Banner";
import Gallary from "../Gallary/Gallary";

const Home = () => {
  
  return (
    <div>
      <Helmet>
        <title>Home - Wild Joy</title>
      </Helmet>
      <Banner></Banner>
      <Gallary></Gallary>
    </div>
  );
};

export default Home;