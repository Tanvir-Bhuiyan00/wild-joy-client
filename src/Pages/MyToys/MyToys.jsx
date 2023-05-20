import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import NewToyRow from "./newToyRow";
const MyToys = () => {
  const { user } = useContext(AuthContext);
  const [newToys, setNewToys] = useState([]);
  const navigate = useNavigate();

  const url = `http://localhost:5000/newToys?email=${user?.email}`;

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
  }, [url, navigate]);

  console.log(newToys);
  return (
    <div>
      <Helmet>
        <title>My Toys - Wild Joy</title>
      </Helmet>
      <div className="max-w-7xl mx-auto mt-10">
        <h2>{newToys.length}</h2>
        <div>
          <div className="overflow-x-auto w-full">
            <table className="table w-full bg-wildJoyColorTwo text-wildJoyColorOne rounded-xl">
              {/* head */}
              <thead className="">
                <tr>
                  <td>
                    <select value="option1" className="select select-accent border-wildJoyColorTwo bg-wildJoyColorTwo text-wildJoyColorOne w-24">
                      <option disabled value="option1">
                        Filter
                      </option>
                      <option>Highest Price</option>
                      <option>Lowest Price</option>
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
                {
                  newToys.map(newToy => <NewToyRow key={newToy._id} newToy={newToy}></NewToyRow>)
                }
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyToys;
