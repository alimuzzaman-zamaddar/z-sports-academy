import React, { useContext } from "react";
import { AuthContext } from "../Pages/Providers/AuthProviders";
import Swal from "sweetalert2";

const AddClass = () => {
  const { user } = useContext(AuthContext);

  const handleAddToy = (event) => {
    event.preventDefault();
    const form = event.target;
    const photo = form.photo.value;
    const Name = form.toyName.value;
    const IName = form.IName.value;
    const Iemail = form.Iemail.value;
    const sets = parseFloat(form.sets.value);
    const price = parseFloat(form.price.value);
    const status = form.status.value;

    const AddedClass = {
      photo,
      Name,
      IName,
      Iemail,
      price,
      sets,
      status,
      enrolled:0,
    };
    // console.log(AddedClass);

    fetch("https://zamaddar-sports-club-server.vercel.app/class", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(AddedClass),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire("SUCCESS", "Your Class added ", "successfully");
        }
      });

    
  };
  return (
        <div className="card">
          <div className="card-body">
            <h1 className="text-7xl text-center font-bold">Add A Class</h1>

            <form onSubmit={handleAddToy} className="w-full">
              <div className="form-control">
                <label className="label">
                  <span className="label-text"> Toy Photo URL</span>
                </label>
                <input
                  type="text"
                  placeholder="Photo Url"
                  name="photo"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Class Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Class  Name"
                  name="toyName"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">instructor name</span>
                </label>
                <input
                  type="text"
                  placeholder="instructor name"
                  name="IName"
                  defaultValue={user?.displayName}
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Instructor Email</span>
                </label>
                <input
                  type="text"
                  placeholder="instructor email"
                  defaultValue={user?.email}
                  name="Iemail"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Price</span>
                </label>
                <input
                  type="number"
                  placeholder="Price"
                  name="price"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">sets</span>
                </label>
                <input
                  type="number"
                  placeholder="sets"
                  name="sets"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">status</span>
                </label>
                <input
                  type="text"
                  placeholder="status"
                  name="status"
                  defaultValue="pending"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Add A Class</button>
              </div>
            </form>
          </div>
        </div>

  );
};

export default AddClass;
