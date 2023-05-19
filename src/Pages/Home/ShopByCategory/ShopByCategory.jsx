import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import "./ShopByCategory.css";
import { useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

const ShopByCategory = () => {
  const [toys, setToys] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/toys")
      .then((res) => res.json())
      .then((data) => setToys(data));
  }, []);

  return (
    <div className="mt-5 max-w-7xl mx-auto">
      <h2
        className="text-center my-10 font-display font-bold text-5xl
      text-wildJoyColorTwo"
      >
        Shop By Category
      </h2>
      <Tabs>
        <TabList className="text-center mb-16 font-bold text-wildJoyColorTwo border-wildJoyColorThree">
          <Tab>Dinosaurs</Tab>
          <Tab>Teddy Bear</Tab>
          <Tab>Horse</Tab>
        </TabList>

        <TabPanel>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <div className="card lg:card-side mb-5 bg-base-100 shadow-xl">
                <figure>
                  <img
                    style={{ width: "25rem", height: "15rem" }}
                    className="p-5"
                    src={toys[0]?.picture}
                    alt="Album"
                  />
                </figure>
                <div className="card-body text-wildJoyColorTwo">
                  <h2 className="card-title text-2xl font-display font-bold">
                    {toys[0]?.toyName}
                  </h2>
                  <p>Price: {toys[0]?.price}</p>
                  <div className="flex justify-between gap-5">
                    <Rating
                      style={{ maxWidth: 150 }}
                      value={toys[0]?.rating}
                      readOnly
                    />
                    <button className="btn hover:bg-wildJoyColorTwo hover:text-wildJoyColorOne">
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="card lg:card-side mb-5 bg-base-100 shadow-xl">
                <figure>
                  <img
                    style={{ width: "25rem", height: "15rem" }}
                    className="p-5"
                    src={toys[1]?.picture}
                    alt="Album"
                  />
                </figure>
                <div className="card-body text-wildJoyColorTwo">
                  <h2 className="card-title text-2xl font-display font-bold">
                    {toys[1]?.toyName}
                  </h2>
                  <p>Price: {toys[1]?.price}</p>
                  <div className="flex justify-between gap-5">
                    <Rating
                      style={{ maxWidth: 150 }}
                      value={toys[1]?.rating}
                      readOnly
                    />
                    <button className="btn hover:bg-wildJoyColorTwo hover:text-wildJoyColorOne">
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </TabPanel>

        <TabPanel>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <div className="card lg:card-side mb-5 bg-base-100 shadow-xl">
                <figure>
                  <img
                    style={{ width: "25rem", height: "15rem" }}
                    className="p-5"
                    src={toys[2]?.picture}
                    alt="Album"
                  />
                </figure>
                <div className="card-body text-wildJoyColorTwo">
                  <h2 className="card-title text-2xl font-display font-bold">
                    {toys[2]?.toyName}
                  </h2>
                  <p>Price: {toys[2]?.price}</p>
                  <div className="flex justify-between gap-5">
                    <Rating
                      style={{ maxWidth: 150 }}
                      value={toys[2]?.rating}
                      readOnly
                    />
                    <button className="btn hover:bg-wildJoyColorTwo hover:text-wildJoyColorOne">
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="card lg:card-side mb-5 bg-base-100 shadow-xl">
                <figure>
                  <img
                    style={{ width: "25rem", height: "15rem" }}
                    className="p-5"
                    src={toys[3]?.picture}
                    alt="Album"
                  />
                </figure>
                <div className="card-body text-wildJoyColorTwo">
                  <h2 className="card-title text-2xl font-display font-bold">
                    {toys[3]?.toyName}
                  </h2>
                  <p>Price: {toys[3]?.price}</p>
                  <div className="flex justify-between gap-5">
                    <Rating
                      style={{ maxWidth: 150 }}
                      value={toys[3]?.rating}
                      readOnly
                    />
                    <button className="btn hover:bg-wildJoyColorTwo hover:text-wildJoyColorOne">
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </TabPanel>

        <TabPanel>
        <div className="grid md:grid-cols-2 gap-4">
            <div>
              <div className="card lg:card-side mb-5 bg-base-100 shadow-xl">
                <figure>
                  <img
                    style={{ width: "25rem", height: "15rem" }}
                    className="p-5"
                    src={toys[4]?.picture}
                    alt="Album"
                  />
                </figure>
                <div className="card-body text-wildJoyColorTwo">
                  <h2 className="card-title text-2xl font-display font-bold">
                    {toys[4]?.toyName}
                  </h2>
                  <p>Price: {toys[4]?.price}</p>
                  <div className="flex justify-between gap-5">
                    <Rating
                      style={{ maxWidth: 150 }}
                      value={toys[4]?.rating}
                      readOnly
                    />
                    <button className="btn hover:bg-wildJoyColorTwo hover:text-wildJoyColorOne">
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="card lg:card-side mb-5 bg-base-100 shadow-xl">
                <figure>
                  <img
                    style={{ width: "25rem", height: "15rem" }}
                    className="p-5"
                    src={toys[5]?.picture}
                    alt="Album"
                  />
                </figure>
                <div className="card-body text-wildJoyColorTwo">
                  <h2 className="card-title text-2xl font-display font-bold">
                    {toys[5]?.toyName}
                  </h2>
                  <p>Price: {toys[5]?.price}</p>
                  <div className="flex justify-between gap-5">
                    <Rating
                      style={{ maxWidth: 150 }}
                      value={toys[5]?.rating}
                      readOnly
                    />
                    <button className="btn hover:bg-wildJoyColorTwo hover:text-wildJoyColorOne">
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ShopByCategory;
