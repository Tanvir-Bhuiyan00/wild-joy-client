import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import NewToyRow from "./newToyRow";
import Swal from "sweetalert2";
const MyToys = () => {
  const { user } = useContext(AuthContext);
  const [sortOrder, setSortOrder] = useState("");
  const [newToys, setNewToys] = useState([]);
  const navigate = useNavigate();

  const url = `https://wild-joy-server.vercel.app/newToys?email=${user?.email}&sort=${sortOrder}`;

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        if (!data.error) {
          setNewToys(data);
        } else {
          navigate("/");
        }
      });
  }, [url, navigate,sortOrder]);

  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      background: "#fdfcf3",
      showCancelButton: true,
      confirmButtonColor: "#da3f24",
      cancelButtonColor: "#102949",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://wild-joy-server.vercel.app/newToys/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Toy Details has been deleted",
                icon: "success",
                background: "#fdfcf3",
                confirmButtonColor: "#102949",
                confirmButtonText: "Nice",
              });
              const remaining = newToys.filter((toy) => toy._id !== _id);
              setNewToys(remaining);
            }
          });
      }
    });
  };

  return (
    <div>
      <Helmet>
        <title>My Toys - Wild Joy</title>
      </Helmet>
      <div className="max-w-7xl mx-auto mt-10">
       
        <div>
          <div className="overflow-x-auto w-full">
            <table className="table w-full bg-wildJoyColorTwo text-wildJoyColorOne rounded-xl">
              {/* head */}
              <thead className="">
                <tr>
                  <td>
                    <select
                      value={sortOrder}
                      onChange={(e) => setSortOrder(e.target.value)}
                      className="select select-accent border-wildJoyColorTwo bg-wildJoyColorTwo text-wildJoyColorOne w-24"
                    >
                      <option disabled value="">
                        Filter
                      </option>
                      <option value="desc">Highest Price</option>
                      <option value="asc">Lowest Price</option>
                    </select>
                  </td>
                  <th>Name</th>
                  <th>Sub-category</th>
                  <th>Price</th>
                  <th>Available Quantity</th>
                  <th>Ratings</th>
                  <th className="text-center">Description</th>
                  <th className="text-center">Delete</th>
                </tr>
              </thead>
              <tbody>
                {newToys.map((newToy) => (
                  <NewToyRow
                    key={newToy._id}
                    handleDelete={handleDelete}
                    newToy={newToy}
                  ></NewToyRow>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyToys;
