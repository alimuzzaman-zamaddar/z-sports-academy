import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../Pages/Providers/AuthProviders";

const AddClass = () => {
    const {user} = useContext(AuthContext)
    const { register,handleSubmit,reset,formState: { errors },} = useForm();

    const onSubmit = (data )=>{
        const addedClass = {sportsClassName,classImage,instructorName,instructorEmail,availableSets,price,status} = data;
        fetch('http://localhost:5000/class',{
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body:JSON.stringify(addedClass)
        })
        .then(res => res.json())
        .then(data => {

        })

    

    }

  return (
    <>
      <div className="card py-24">
        <h1 className="text-center text-6xl font-bold">Add A Class</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">sportsClassName </span>
            </label>
            <input
              type="text"
              {...register("sportsClassName", { required: true })}
              name="sportsClassName"
              placeholder="sportsClassName"
              className="input input-bordered"
            />
            {errors.name && (
              <span className="text-red-600">sportsClassName  is required</span>
            )}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Class Image</span>
            </label>
            <input
              type="text"
              {...register("classImage", { required: true })}
              name="classImage"
              placeholder="Photo Url"
              className="input input-bordered"
            />
            {errors.name && (
              <span className="text-red-600">Name is required</span>
            )}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Instructor Name</span>
            </label>
            <input
              type="text"
              {...register("instructorName", { required: true })}
              name="instructorName"
              defaultValue={user?.displayName}
              placeholder="Name"
              className="input input-bordered"
            />
            {errors.name && (
              <span className="text-red-600">instructorName is required</span>
            )}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">instructor Email</span>
            </label>
            <input
              type="text"
              {...register("instructorEmail", { required: true })}
              name="instructorEmail"
              placeholder="instructor Email"
              defaultValue={user?.email}
              readOnly
              className="input input-bordered"
            />
            {errors.name && (
              <span className="text-red-600">Name is required</span>
            )}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">available Sets</span>
            </label>
            <input
              type="text"
              {...register("availableSets", { required: true })}
              name="availableSets"
              placeholder="available Sets"
              className="input input-bordered"
            />
            {errors.name && (
              <span className="text-red-600">available Sets is required</span>
            )}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">price</span>
            </label>
            <input
              type="text"
              {...register("price", { required: true })}
              placeholder="price"
              className="input input-bordered"
            />
            {errors.photoURL && (
              <span className="text-red-600">price is required</span>
            )}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Status</span>
            </label>
            <input
              type="text"
              {...register("status", { required: true })}
              name="status"
              placeholder="status"
              className="input input-bordered"
              defaultValue='pending'
              readOnly
            />
            {errors.email && (
              <span className="text-red-600">Email is required</span>
            )}
          </div>
          <div className="form-control mt-6">
            <input className="btn btn-primary" type="submit" value="Add Class" />
          </div>
        </form>
      </div>
    </>
  );
};

export default AddClass;
