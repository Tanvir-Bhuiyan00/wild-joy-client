import { Link } from "react-router-dom";
import loginBanner from "../../assets/login-banner.png";
import SocialLogin from "./SocialLogin";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const LogIn = () => {

  const {signIn} = useContext(AuthContext)

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    signIn(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        form.reset();
      })
      .catch((err) => console.log(err));
  };
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
                Please Login
              </h2>
              <form onSubmit={handleLogin}>
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
