import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { AuthContext } from "../Pages/Providers/AuthProviders";
import useAdmin from "../Hooks/sequrity/useAdmin";
import useInstructor from "../Hooks/sequrity/useInstructor";
import { FaBookReader, FaHome, FaUsers } from "react-icons/fa";

const Dashboard = () => {
  const {user} = useContext(AuthContext)
  const [isAdmin] = useAdmin();
  const [isInstructor] = useInstructor()
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        <Outlet></Outlet>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
          {
            isAdmin ? <>  
            <li>
              <span className="mx-auto text-2xl font-bold" > <FaHome></FaHome></span> 
              <h1 className="mx-auto text-2xl font-bold" >Admin DashBoard</h1>
            </li>
              <li>
                <Link to="/dashboard/allusers"><span> <FaUsers></FaUsers> </span>  Manage Users</Link>
              </li> 
              <li>
                <Link to="/dashboard/allclasses"> <span><FaBookReader></FaBookReader></span>  Manage Classes </Link>
              </li>  
                 <li>
                <Link to="/"><span> <FaHome></FaHome></span>  Admin Home </Link>
              </li>
            </> : ''
          }
          {
            isInstructor ? <>
                <h1 className="text-center text-2xl font-bold" >Instructor DashBoard</h1>
              <li>
                <Link to="/"> instructor Home </Link>
              </li>
              <li>
                <Link to="/dashboard/addclass">Add a Class </Link>
              </li>
              <li>
                <Link to="/dashboard/instructorclasses">My Classes </Link>
              </li>
            </> : ''
          }
          {
             isAdmin  ||  isInstructor ? ''  : <>  
             <h1 className="text-center text-2xl font-bold" >Student DashBoard</h1>
           <li>
             <Link to="/dashboard/studenthome">Student Home </Link>
           </li>
            <li>
             <Link to="/dashboard/myclass"> My Class </Link>
           </li>
            <li>
             <Link to="/dashboard/studentPayments"> My Payments </Link>
           </li>
            <li>
             <Link to="/">Back To Home </Link>
           </li>
          </>
          }

        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
