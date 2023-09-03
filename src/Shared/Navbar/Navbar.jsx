import { useContext } from "react";
import "./Navbar.css";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Pages/Providers/AuthProviders";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };

  return (
    <div className="header-navigation-bar text-[#05386B]">
      <div className="header-title">
        <img
          className="w-12 h-12 rounded-full "
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSV6j66I4_kMdIQfzzkc-2Yv_sgXVWLhSOd0g&usqp=CAU"
          alt=""
        />
        <h3 className="">Z Sports Academy </h3>
      </div>

      <div className="navigation-lings">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "font-bold" : "")}
        >
          Home
        </NavLink>
        <NavLink
          to="/instructor"
          className={({ isActive }) => (isActive ? "font-bold" : "")}
        >
          Instructors
        </NavLink>
        <NavLink
          to="/classes"
          className={({ isActive }) => (isActive ? "font-bold" : "")}
        >
          Classes
        </NavLink>
        <NavLink
          to="/"
         
        >
          Blogs
        </NavLink>
        <NavLink
          to="/"
          
        >
          Contact
        </NavLink>
        {user ? (
          <NavLink
            to="/dashboard"
            className={({ isActive }) => (isActive ? "font-bold" : "")}
          >
            Dashboard
          </NavLink>
        ) : (
          ""
        )}
      </div>
      <div>
        {user ? (
          <div className="navigation-login">
            <img
              className="h-12 w-12 rounded-full"
              title={user?.displayName}
              src={user?.photoURL}
              alt=""
            />
            <button
              className="btn btn-primary"
              onClick={handleLogOut}
            >
              Logout
            </button>
          </div>
        ) : (
          <div>
            <button className="btn bg-[#05386B] hover:bg-slate-400 text-white duration-700 login-button">
              <Link className="" to="/login">
                Login
              </Link>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
