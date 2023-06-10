import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { AuthContext } from "../Pages/Providers/AuthProviders";
import useAdmin from "../Hooks/sequrity/useAdmin";
import useInstructor from "../Hooks/sequrity/useInstructor";

const Dashboard = () => {
  const {user} = useContext(AuthContext)
  const [isAdmin] = useAdmin();
  const [isInstructor] = useInstructor()
  // const isAdmin = true
  // const isInstructor = false;
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        {/* Page content here */}
        <Outlet></Outlet>
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
          {
            isAdmin ? <>  
                <h1 className="text-center text-2xl font-bold" >Admin DashBoard</h1>
              <li>
                <Link to="/dashboard/allusers">Manage Users</Link>
              </li> 
              <li>
                <Link to="/dashboard/allclasses">Manage Classes </Link>
              </li>  
                 <li>
                <Link to="/"> Admin Home </Link>
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
