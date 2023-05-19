import { Link } from "react-router-dom";
import logo2 from "../../../assets/wild-joy-log2.png"
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="bg-wildJoyColorTwo mt-16">
      <div className="container mb-0 mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="flex flex-col">
            <img className="w-36  mb-4" src={logo2} alt="Website Logo" />
            <p className="text-wildJoyColorOne text-sm">Embrace the Wild. Discover Joy. Play with Animal Toys!</p>
          </div>
          <div className="flex flex-col">
            <h4 className="text-wildJoyColorOne text-lg mb-4">Navigation</h4>
            <nav>
              <Link to="/" className="text-wildJoyColorOne hover:text-white text-sm mb-2">Home</Link>
              <Link to="/allToys" className="text-wildJoyColorOne mx-2 hover:text-white text-sm mb-2">All Toys</Link>
              <Link to="/blogs" className="text-wildJoyColorOne hover:text-white text-sm mb-2">Blogs</Link>
            </nav>
          </div>
          <div className="flex flex-col">
            <h4 className="text-wildJoyColorOne text-lg mb-4">Contact Info</h4>
            <p className="text-wildJoyColorOne text-sm">123 Main Street</p>
            <p className="text-wildJoyColorOne text-sm">City: Dhaka, State: Dhaka, ZIP: 00025</p>
            <p className="text-wildJoyColorOne text-sm">Email: wild-joy@example.com</p>
            <p className="text-wildJoyColorOne text-sm">Phone: 123-456-7890</p>
          </div>
          <div className="flex flex-col">
            <h4 className="text-wildJoyColorOne text-lg mb-4">Follow Us</h4>
            <div className="flex">
              <a className="text-wildJoyColorOne hover:text-white" href="https://facebook.com">
                <FaFacebook></FaFacebook>
              </a>
              <a className="text-wildJoyColorOne hover:text-white mx-2" href="https://twitter.com">
                <FaTwitter></FaTwitter>
              </a>
              <a className="text-wildJoyColorOne hover:text-white" href="https://instagram.com">
                <FaInstagram></FaInstagram>
              </a>
            </div>
          </div>
        </div>
        <hr className="border-gray-700 my-8" />
        <p className="text-wildJoyColorOne text-sm text-center">Copyright &copy; {new Date().getFullYear()} - All right reserved by Wild Joy Ltd.</p>
      </div>
    </footer>
  );
};

export default Footer;