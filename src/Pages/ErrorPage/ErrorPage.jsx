import { Helmet } from "react-helmet";
import img404 from "../../assets/404.svg";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div>
      <Helmet>
        <title>Page Not Found - Wild Joy</title>
      </Helmet>
      <div className="max-w-7xl mx-auto h-screen">
        <div className="flex justify-center items-center">
          <div >
            <div className="flex justify-center">
            <img className="p-14 w-9/12" src={img404} alt="" />
            </div>
            <div>
              <h2 className="font-display text-5xl fond-bold text-wildJoyColorThree text-center mt-0">
                Page Not Found
              </h2>
              <div className="flex justify-center mt-7 mb-5">
                <Link to="/">
                  <button className="btn  bg-wildJoyColorThree border-0 text-wildJoyColorOne">
                    Back To Homepage
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
