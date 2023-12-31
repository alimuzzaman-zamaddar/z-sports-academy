import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Home/Main/Main";
import Home from "../Home/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Classes from "../Pages/Classes/Classes";
import Dashboard from "../Dashboard/Dashboard";
import MyClass from "../Dashboard/MyClass";
import AllUsers from "../Dashboard/AllUsers";
import AddClass from "../Dashboard/AddClass";
import AllClasses from "../Dashboard/AllClasses";
import Instructor from "../Pages/Instructor/Instructor";
import Payment from "../Dashboard/Payment";
import InstructorsClasses from "../Pages/InstructorClasses/InstructorsClasses";
import StudentPayments from "../Dashboard/Student/StudentPayments";
import StudentHome from "../Dashboard/Student/StudentHome";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import PopularInstructors from "../PopularInstructors/PopularInstructors";
import EnrolledClasses from "../Dashboard/Student/EnrolledClasses";
import Update from "../Pages/InstructorClasses/Update";




const router = createBrowserRouter([
    {
      path: "/",
      element:   <Main></Main> ,
      errorElement: <ErrorPage></ErrorPage>,
      children:[
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: '/login',
            element: <Login></Login>
        },
        {
            path: '/register',
            element: <Register></Register>
        },
        {
            path: '/classes',
            element: <Classes></Classes>
        },
        {
            path: '/instructor',
            element: <Instructor></Instructor>
        },
        {
            path: '/popularinstructors',
            element: <PopularInstructors></PopularInstructors>
        },

      ]
    },
    {
      path:'dashboard',
      element:  <Dashboard></Dashboard> ,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        { 
         path: 'myclass',
         element:<MyClass></MyClass>
        },
        { 
         path: 'allusers',
         element:<AllUsers></AllUsers>
        },
        { 
         path: 'addclass',
         element:<AddClass></AddClass>
        },
        { 
         path: 'allclasses',
         element:<AllClasses></AllClasses>
        },
        { 
         path: 'payment',
         element:  <Payment></Payment>,
         
        },
        { 
         path: 'instructorclasses',
         element:  <InstructorsClasses></InstructorsClasses>
        },
        { 
         path: 'studentpayments',
         element:  <StudentPayments></StudentPayments>
        },
        { 
         path: 'enrolledclasses',
         element:  <EnrolledClasses></EnrolledClasses>
        },
        { 
         path: 'studenthome',
         element:  <StudentHome></StudentHome>
        },
        { 
         path: 'update',
         element:  <Update></Update>
        },
      ]
    }
]);

export default router;