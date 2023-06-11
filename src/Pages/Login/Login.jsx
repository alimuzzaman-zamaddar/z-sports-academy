import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProviders";
import { useForm } from "react-hook-form";
import SocialLogin from "../../Shared/SocialLogin/SocialLogin";

const Login = () => {
  const { signIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const from = location.state?.from?.pathname || "/";
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    signIn(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log("created user", user);
        navigate(from, { replace: true });
      })
      .catch((error) => console.log(error));
  };
  return (
    <>
      <div className="card py-24">
        <h1 className="text-center text-6xl font-bold">please Login</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              {...register("email", { required: true })}
              name="email"
              placeholder="email"
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

            <div className=" flex items-center">
              <input 
                type={showPassword ? "text" : "password"}
                {...register("password", {
                  required: true,
                  minLength: 6,
                  pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[a-z])/,
                })}
                placeholder="password"
                className="input input-bordered w-[80%]"
              />
              <button
                className="btn btn-primary w-[20%]"
                type="button"
                onClick={togglePasswordVisibility}
              >
                {showPassword ? "Hide Password" : "Show Password"}
              </button>
            </div>

            {errors.password?.type === "required" && (
              <p className="text-red-600">Password is required</p>
            )}
            {errors.password?.type === "pattern" && (
              <p className="text-red-600">
                Password must have one Uppercase one lower case, one number and
                one special character.
              </p>
            )}
          </div>

          <div className="form-control mt-6">
            <input className="btn btn-primary" type="submit" value="Login" />
          </div>
        </form>
        <SocialLogin></SocialLogin>
        <span className="text-center">
          Already have an account
          <strong>
            <Link to="/register"> Register Fast </Link>
          </strong>
        </span>
      </div>
    </>
  );
};

export default Login;
