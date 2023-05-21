import { useContext } from "react";
import { Helmet } from "react-helmet";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";

const UpdateDetails = () => {
  const { user } = useContext(AuthContext);
  const details = useLoaderData();
  const {
    _id,
    photo,

    availableQuantity,
    detailDescription,
    price,
    rating,
    subCategory,
    toyName,
  } = details;

  const handleUpdateDetails = (event) => {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const photoURL = form.photoURL.value;
    const sellerName = form.sellerName.value;
    const email = user?.email;
    const subCategory = form.subCategory.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const quantity = form.quantity.value;
    const description = form.description.value;
    const updatedToys = {
      toyName: name,
      photo: photoURL,
      sellerName,
      email,
      subCategory,
      price,
      rating,
      availableQuantity: quantity,
      detailDescription: description,
    };
    fetch(`http://localhost:5000/newToys/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedToys),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Success!",
            text: "Toy Details Updated Successfully",
            icon: "success",
            background: "#fdfcf3",
            confirmButtonColor: "#102949",
            confirmButtonText: "Nice",
          });
        }
      });
  };
  return (
    <div>
      <Helmet>
        <title>Update Details - Wild Joy</title>
      </Helmet>
      <div className="my-10">
        <h2 className="font-display text-4xl text-wildJoyColorThree mb-10 font-bold text-center">
          Update Toy Details
        </h2>
        <form onSubmit={handleUpdateDetails} className="max-w-7xl mx-auto">
          <div className="form-control  input-group mx-auto md:w-1/2">
            <label className="label text-left">
              <span className="label-text pl-0 font-bold">Toy Name :</span>

              <input
                type="text"
                name="name"
                defaultValue={toyName}
                placeholder="name"
                className="input  border-wildJoyColorTwo rounded-md input-bordered md:w-3/4"
              />
            </label>
          </div>
          <div className="form-control  input-group mx-auto md:w-1/2">
            <label className="label text-left">
              <span className="label-text pl-0 font-bold">Toy Photo URL :</span>

              <input
                type="text"
                name="photoURL"
                defaultValue={photo}
                placeholder="photo URL"
                className="input  border-wildJoyColorTwo rounded-md input-bordered md:w-3/4"
              />
            </label>
          </div>
          <div className="form-control  input-group mx-auto md:w-1/2">
            <label className="label text-left">
              <span className="label-text pl-0 font-bold">Seller Name :</span>

              <input
                defaultValue={user?.displayName}
                type="text"
                name="sellerName"
                placeholder="seller name"
                className="input  border-wildJoyColorTwo rounded-md input-bordered md:w-3/4"
              />
            </label>
          </div>
          <div className="form-control  input-group mx-auto md:w-1/2">
            <label className="label text-left">
              <span className="label-text pl-0 font-bold">Seller Email :</span>

              <input
                defaultValue={user?.email}
                type="email"
                name="email"
                placeholder="seller email"
                className="input  border-wildJoyColorTwo rounded-md input-bordered md:w-3/4"
              />
            </label>
          </div>
          <div className="form-control  input-group mx-auto md:w-1/2">
            <label className="label text-left">
              <span className="label-text pl-0 font-bold">Sub Category :</span>

              <input
                type="text"
                name="subCategory"
                defaultValue={subCategory}
                placeholder="enter sub category"
                className="input  border-wildJoyColorTwo rounded-md input-bordered md:w-3/4"
              />
            </label>
          </div>
          <div className="form-control  input-group mx-auto md:w-1/2">
            <label className="label text-left">
              <span className="label-text pl-0 font-bold">Price :</span>

              <input
                type="text"
                name="price"
                defaultValue={price}
                placeholder="price"
                className="input  border-wildJoyColorTwo rounded-md input-bordered md:w-3/4"
              />
            </label>
          </div>
          <div className="form-control  input-group mx-auto md:w-1/2">
            <label className="label text-left">
              <span className="label-text pl-0 font-bold">Rating :</span>

              <input
                type="text"
                name="rating"
                defaultValue={rating}
                placeholder="rating"
                className="input  border-wildJoyColorTwo rounded-md input-bordered md:w-3/4"
              />
            </label>
          </div>
          <div className="form-control  input-group mx-auto md:w-1/2">
            <label className="label text-left">
              <span className="label-text pl-0 font-bold">Quantity :</span>

              <input
                type="text"
                name="quantity"
                defaultValue={availableQuantity}
                placeholder="available quantity"
                className="input  border-wildJoyColorTwo rounded-md input-bordered md:w-3/4"
              />
            </label>
          </div>

          <div className="form-control  input-group mx-auto md:w-1/2">
            <label className="label text-left">
              <span className="label-text pl-0 font-bold">Description :</span>

              <input
                type="text"
                name="description"
                defaultValue={detailDescription}
                placeholder="enter detail description"
                className="input  border-wildJoyColorTwo rounded-md input-bordered md:w-3/4"
              />
            </label>
          </div>

          <div className="form-control md:w-1/2 mx-auto mt-6">
            <input
              className=" btn hover:bg-wildJoyColorTwo hover:text-wildJoyColorOne"
              type="submit"
              value="Update"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateDetails;
