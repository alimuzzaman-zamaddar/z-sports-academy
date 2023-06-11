import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProviders";
import Swal from "sweetalert2";
import SocialLogin from "../../Shared/SocialLogin/SocialLogin";

const Register = () => {
  const { createUser, updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    if (data.password !== data.confirmPassword) {
      // Passwords do not match
      Swal.fire({
        icon: "error",
        title: "Password Error",
        text: "Passwords do not match.",
      });
      return;
    }

    createUser(data.email, data.password).then((result) => {
      const loggedUser = result.user;
      console.log(loggedUser);
      updateUserProfile(data.name, data.photoURL)
        .then(() => {
          const savedUser = { name: data.name, email: data.email };
          fetch("https://zamaddar-sports-club-server.vercel.app/users", {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(savedUser),
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.insertedId) {
                reset();
                Swal.fire({
                  position: "top-end",
                  icon: "success",
                  title: "User created successfully.",
                  showConfirmButton: false,
                  timer: 1500,
                });
                navigate("/");
              }
            });
        })
        .catch((error) => console.log(error));
    });
  };

  return (
    <>
      <div className="card py-24">
        <h1 className="text-center text-6xl font-bold">Please Register</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              {...register("name", { required: true })}
              name="name"
              placeholder="Name"
              className="input input-bordered"
            />
            {errors.name && (
              <span className="text-red-600">Name is required</span>
            )}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <input
              type="text"
              {...register("photoURL", { required: true })}
              placeholder="Photo URL"
              className="input input-bordered"
            />
            {errors.photoURL && (
              <span className="text-red-600">Photo URL is required</span>
            )}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              {...register("email", { required: true })}
              name="email"
              placeholder="Email"
              className="input input-bordered"
            />
            {errors.email && (
              <span className="text-red-600">Email is required</span>
            )}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              {...register("password", {
                required: true,
                minLength: 6,
                maxLength: 20,
                pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[a-z])/,
              })}
              placeholder="Password"
              name="password"
              className="input input-bordered"
            />
            {errors.password?.type === "required" && (
              <p className="text-red-600">Password is required</p>
            )}
            {errors.password?.type === "pattern" && (
              <p className="text-red-600">
                Password must have one uppercase letter, one lowercase letter,
                one number, and one special character.
              </p>
            )}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Confirm Password</span>
            </label>
            <input
              type="password"
              {...register("confirmPassword", {
                required: true,
                minLength: 6,
                maxLength: 20,
                pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[a-z])/,
              })}
              placeholder="Confirm Password"
              name="confirmPassword"
              className="input input-bordered"
            />
            {errors.confirmPassword?.type === "required" && (
              <p className="text-red-600">Confirm Password is required</p>
            )}
            {errors.confirmPassword?.type === "pattern" && (
              <p className="text-red-600">
                Confirm Password must have one uppercase letter, one lowercase
                letter, one number, and one special character.
              </p>
            )}
            {errors.confirmPassword?.type === "validate" && (
              <p className="text-red-600">Passwords do not match.</p>
            )}
          </div>
          <div className="form-control mt-6">
            <input className="btn btn-primary" type="submit" value="Register" />
          </div>
        </form>
        <SocialLogin></SocialLogin>
        <span className="text-center">
          Already have an account?{" "}
          <strong>
            <Link to="/login">Please Login</Link>
          </strong>
        </span>
      </div>
    </>
  );
};

export default Register;
