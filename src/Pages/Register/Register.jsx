import { Link } from "react-router-dom";
import loginBanner from "../../assets/login-banner.png";

const Register = () => {
  return (
    <div className="my-10">
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <img src={loginBanner} alt="" />
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <h2 className="font-display text-4xl text-wildJoyColorThree mb-5 font-bold text-center">
                Please Register
              </h2>
              <form>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-bold">Your Name</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="name"
                    className="input  border-wildJoyColorTwo rounded-md input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-bold">Email</span>
                  </label>
                  <input
                    type="email"
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
                    type="password"
                    name="password"
                    placeholder="password"
                    className="input border-wildJoyColorTwo rounded-md input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-bold">Photo URL</span>
                  </label>
                  <input
                    type="text"
                    name="photo"
                    placeholder="url"
                    className="input border-wildJoyColorTwo rounded-md input-bordered"
                  />
                </div>
                <div className="form-control mt-6">
                  <input
                    className=" btn hover:bg-wildJoyColorTwo hover:text-wildJoyColorOne"
                    type="submit"
                    value="Register"
                  />
                </div>
              </form>
              <p className="my-4 text-center text-wildJoyColorTwo font-bold">
                Already Have An Account{" "}
                <Link className="text-wildJoyColorThree" to="/login">
                  Login
                </Link>
              </p>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;