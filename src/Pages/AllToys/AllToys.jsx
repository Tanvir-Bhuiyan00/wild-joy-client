import { Helmet } from "react-helmet";

import AllToyRow from "./AllToyRow";
import { useEffect, useState } from "react";

const AllToys = () => {
  const [allToys, setAllToys] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/newToys")
      .then((res) => res.json())
      .then((data) => setAllToys(data));
  }, []);

  const handleSearch = () => {
    fetch(`http://localhost:5000/toySearchByTitle/${searchText}`)
      .then((res) => res.json())
      .then((data) => {
        setAllToys(data);
      });
  };
  return (
    <div>
      <Helmet>
        <title>All Toys - Wild Joy</title>
      </Helmet>
      <div className="max-w-7xl mx-auto mt-10">
        <div className="mt-16 mb-5 flex justify-end">
          <div className="form-control">
            <div className="mx-auto input-group">
              <input
                onChange={(e) => setSearchText(e.target.value)}
                type="text"
                placeholder="Search…"
                className="input input-bordered bg-wildJoyColorTwo text-wildJoyColorOne"
              />
              <button
                onClick={handleSearch}
                className="btn bg-wildJoyColorTwo text-wildJoyColorOne btn-square"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div>
          <div className="overflow-x-auto w-full">
            <table className="table w-full mb-10 bg-wildJoyColorTwo text-wildJoyColorOne rounded-xl">
              {/* head */}
              <thead className="">
                <tr>
                  <td>No</td>
                  <th>Toy Name</th>
                  <th>Seller Name</th>
                  <th>Sub-category</th>
                  <th>Price</th>
                  <th>Available Quantity</th>
                  <th className="text-center">Details</th>
                </tr>
              </thead>
              <tbody>
                {allToys.map((toy, index) => (
                  <AllToyRow key={toy._id} toy={toy} index={index}></AllToyRow>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllToys;
