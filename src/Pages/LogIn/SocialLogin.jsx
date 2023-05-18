import { FaGoogle } from "react-icons/fa";

const SocialLogin = () => {
  return (
    <div>
      <div className="divider text-sm font-bold text-gray-200">OR</div>
      <div className="text-center">
        <button
   
          className="btn btn-circle border-0 shadow-inner text-wildJoyColorTwo"
        >
          <FaGoogle></FaGoogle>
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;