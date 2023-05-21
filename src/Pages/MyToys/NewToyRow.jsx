import { MdSystemUpdateAlt } from "react-icons/md";
import { AiFillDelete } from "react-icons/ai";
import { Link } from "react-router-dom";

const NewToyRow = ({ newToy, handleDelete }) => {
  const {
    _id,
    photo,
    sellerName,
    email,
    availableQuantity,
    detailDescription,
    price,
    rating,
    subCategory,
    toyName,
  } = newToy;
  return (
    <tr>
      <td>
        <Link to={`/updateDetails/${_id}`}>
          <button className="btn btn-ghost">
            <MdSystemUpdateAlt className="w-16 h-5"></MdSystemUpdateAlt>
          </button>
        </Link>
      </td>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img src={photo} alt="photo" />
            </div>
          </div>
          <div>
            <div className="font-bold">{toyName}</div>
            <div className="text-sm opacity-50">{sellerName}</div>
          </div>
        </div>
      </td>
      <td>
        {subCategory}
        <br />
        <span className="badge badge-ghost badge-sm">{email}</span>
      </td>
      <td>${price}</td>
      <td>{availableQuantity}</td>
      <td>{rating} Stars</td>
      <td className="center">{detailDescription.slice(0,12)} Read More...</td>
      <td>
        <button
          onClick={() => handleDelete(_id)}
          className="btn btn-ghost btn-xs"
        >
          <AiFillDelete className="w-16 h-5"></AiFillDelete>
        </button>
      </td>
    </tr>
  );
};

export default NewToyRow;
