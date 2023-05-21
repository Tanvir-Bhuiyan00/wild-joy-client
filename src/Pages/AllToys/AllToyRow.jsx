import { useContext } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../providers/AuthProvider";

const AllToyRow = ({ toy, index }) => {
  const { user } = useContext(AuthContext);
  const {
    _id,
    photo,
    sellerName,
    email,
    availableQuantity,

    price,

    subCategory,
    toyName,
  } = toy;

  const handleViewDetails = () => {
    if (!user) {
      Swal.fire({
        icon: "error",
        title: "You have to log in first to view details",
        background: "#fdfcf3",
        confirmButtonColor: "#102949",
        showConfirmButton: true,
        confirmButtonText: "Okay",
      });
    }
  };
  return (
    <tr>
      <td>{index + 1}</td>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img src={photo} alt="photo" />
            </div>
          </div>
          <div>
            <div className="font-bold">{toyName}</div>
          </div>
        </div>
      </td>
      <td>
        {sellerName}
        <br />
        <span className="badge badge-ghost badge-sm">{email}</span>
      </td>
      <td>{subCategory}</td>
      <td>${price}</td>

      <td>{availableQuantity}</td>
      <td className="text-center">
        <Link to={`/allToyDetails/${_id}`}>
          <button
            onClick={() => handleViewDetails(_id)}
            className="btn btn-ghost btn-outline hover:bg-wildJoyColorOne hover:text-wildJoyColorTwo"
          >
            View Details
          </button>
        </Link>
      </td>
    </tr>
  );
};

export default AllToyRow;
