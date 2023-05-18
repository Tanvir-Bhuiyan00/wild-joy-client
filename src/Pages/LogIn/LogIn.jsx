import { Link } from "react-router-dom";
import loginBanner from "../../assets/login-banner.png";
import SocialLogin from "./SocialLogin";

const LogIn = () => {
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <img src={loginBanner} alt="" />
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <h2 className="font-display text-5xl text-wildJoyColorThree mb-5 font-bold text-center">
                Please Login
              </h2>
              <form>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-bold">Email</span>
                  </label>
                  <input
                    type="text"
                    name="email"
                    placeholder="email"
                    className="input  border-wildJoyColorTwo rounded-md input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-bold">Password</span>
                  </label>
                  <input
                    type="text"
                    name="password"
                    placeholder="password"
                    className="input border-wildJoyColorTwo rounded-md input-bordered"
                  />
                </div>
                <div className="form-control mt-6">
                  <input
                    className=" btn hover:bg-wildJoyColorTwo hover:text-wildJoyColorOne"
                    type="submit"
                    value="Login"
                  />
                </div>
              </form>
              <p className="my-4 text-center text-wildJoyColorTwo font-bold">
                New To Wild Joy{" "}
                <Link className="text-wildJoyColorThree" to="/register">
                  Register
                </Link>
              </p>
              <SocialLogin></SocialLogin>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
