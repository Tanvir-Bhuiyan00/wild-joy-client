import { Rating } from "@smastrom/react-rating";
import { Helmet } from "react-helmet";
import { useLoaderData } from "react-router-dom";

const AllToyDetails = () => {
  const allToyDetails = useLoaderData();
  const {
    photo,
    sellerName,
    email,
    availableQuantity,
    detailDescription,
    price,

    rating,
    toyName,
  } = allToyDetails;
  return (
    <div>
      <Helmet>
        <title>Toy Details - Wild Joy</title>
      </Helmet>
      <div className=" my-16 max-w-7xl mx-auto">
        <div className="hero bg-base-200">
          <div className="hero-content flex-col gap-10 lg:flex-row">
            <div >
              <img src={photo} className="image-full" />
            </div>
            <div className="text-center  md:w-1/2">
              <h1 className="text-5xl text-wildJoyColorTwo font-extrabold font-display">
                {toyName}
              </h1>
              <p className="py-6  text-wildJoyColorTwo font-bold">
                {detailDescription}
              </p>

              <div className="flex justify-between">
                <p className="pt-6 text-left text-wildJoyColorTwo font-bold">
                  Seller Name: {sellerName}
                </p>
                <p className="pt-6 text-right text-wildJoyColorTwo font-bold">
                  Seller Email: {email}
                </p>
              </div>
              <div className="flex justify-between">
                <p className="pt-2  text-wildJoyColorTwo font-bold">
                  Price: {price}
                </p>
                <p className="pt-2  text-wildJoyColorTwo font-bold">
                  Quantity: {availableQuantity}
                </p>
              </div>
              <div className="flex justify-between gap-5 mt-4">
                <Rating style={{ maxWidth: 150 }} value={rating} readOnly />

                <button className="py-2 px-5 text-wildJoyColorThree  font-bold  rounded-xl border-2 border-wildJoyColorThree hover:bg-wildJoyColorThree hover:text-wildJoyColorOne">
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllToyDetails;
