import { Link } from "react-router-dom";
import logo from "../../../assets/wild-joy-logo.png";
import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";

const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then()
      .catch((error) => console.log(error));
  };
  const navItems = (
    <>
      <li className=" font-bold  tracking-wide text-wildJoyColorTwo">
        <Link to="/">Home</Link>
      </li>
      <li className="font-bold tracking-wide text-wildJoyColorTwo">
        <Link to="/allToys">All Toys</Link>
      </li>

      {user?.email ? (
        <>
          <li className="font-bold tracking-wide text-wildJoyColorTwo">
            <Link to="/myToys">My Toys</Link>
          </li>
          <li className="font-bold tracking-wide text-wildJoyColorTwo">
            <Link to="/addAToy">Add A Toy</Link>
          </li>
        </>
      ) : (
        <></>
      )}
      <li className="font-bold tracking-wide text-wildJoyColorTwo">
        <Link to="/blogs">Blogs</Link>
      </li>
    </>
  );

  return (
    <nav className="max-w-7xl mx-auto">
      <div className="navbar bg-base-100 py-10">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navItems}
            </ul>
          </div>
          <Link>
            <img src={logo} className="w-36" alt="" />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navItems}</ul>
        </div>
        <div className="navbar-end">
          {user?.email ? (
            <>
              {" "}
                <div className="avatar mr-3">
                <div title={user?.displayName} className="w-12 rounded-full">
                  <img src={user?.photoURL}  className="image-full "/>
                </div>
                </div>
              <button
                onClick={handleLogOut}
                className="py-2 px-5 text-wildJoyColorOne  font-bold bg-wildJoyColorThree rounded-xl border-0"
              >
                Logout
              </button>
            </>
          ) : (
            <Link to="/login">
              <button className="py-2 px-5 text-wildJoyColorOne  font-bold bg-wildJoyColorThree rounded-xl border-0">
                Login
              </button>
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
