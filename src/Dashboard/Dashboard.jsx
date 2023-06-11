import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { AuthContext } from "../Pages/Providers/AuthProviders";
import useAdmin from "../Hooks/sequrity/useAdmin";
import useInstructor from "../Hooks/sequrity/useInstructor";
import { FaAddressBook, FaAddressCard, FaBookReader, FaHome, FaPaypal, FaUsers, FaUtensils } from "react-icons/fa";

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
                <span className="mx-auto text-2xl font-bold" > <FaHome></FaHome></span> 
                <h1 className="text-center text-2xl font-bold" >Instructor DashBoard</h1>
              <li>
                <Link to="/"> <span> <FaHome></FaHome></span>  instructor Home </Link>
              </li>
              <li>
                <Link to="/dashboard/addclass"> <span><FaAddressCard></FaAddressCard></span>  Add a Class </Link>
              </li>
              <li>
                <Link to="/dashboard/instructorclasses"> <span></span>   My Classes </Link>
              </li>
            </> : ''
          }
          {
             isAdmin  ||  isInstructor ? ''  : <>  
             <span className="mx-auto text-2xl font-bold" > <FaHome></FaHome></span> 
             <h1 className="text-center text-2xl font-bold mb-5" >Student DashBoard</h1>
           <li>
             <Link to="/dashboard/studenthome"> <span> <FaHome></FaHome></span>Student Home </Link>
           </li>
            <li>
             <Link to="/dashboard/myclass"> <span><FaAddressBook></FaAddressBook></span> My Class </Link>
           </li>
            <li>
             <Link to="/dashboard/studentpayments"> <span><FaPaypal></FaPaypal></span> My Payments History </Link>
           </li>
            <li>
             <Link to="/"> <span> <FaHome></FaHome></span>  Back To Home </Link>
           </li>
          </>
          }

        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
