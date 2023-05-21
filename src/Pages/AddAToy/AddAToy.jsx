import { useContext } from "react";
import { Helmet } from "react-helmet";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";


const AddAToy = () => {
  const { user } = useContext(AuthContext);

  const handleAddAToy = (event) => {
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
    const newToys = {
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
    fetch("http://localhost:5000/newToys", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newToys),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          // form.reset();
          Swal.fire({
            title: "Success!",
            text: "Toy Details Added Successfully",
            icon: "success",
            background:'#fdfcf3',
            confirmButtonColor:"#102949",
            confirmButtonText: "Nice",
          });
        }
      });
  };

  return (
    <div>
      <Helmet>
        <title>Add A Toy - Wild Joy</title>
      </Helmet>
      <div className="my-10">
        <h2 className="font-display text-4xl text-wildJoyColorThree mb-10 font-bold text-center">
          Add A Toy
        </h2>
        <form onSubmit={handleAddAToy} className="max-w-7xl mx-auto">
          <div className="form-control  input-group mx-auto md:w-1/2">
            <label className="label text-left">
              <span className="label-text pl-0 font-bold">Toy Name :</span>

              <input
                type="text"
                name="name"
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
                placeholder="enter detail description"
                className="input  border-wildJoyColorTwo rounded-md input-bordered md:w-3/4"
              />
            </label>
          </div>

          <div className="form-control md:w-1/2 mx-auto mt-6">
            <input
              className=" btn hover:bg-wildJoyColorTwo hover:text-wildJoyColorOne"
              type="submit"
              value="Add A Toy"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddAToy;
