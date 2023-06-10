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




const router = createBrowserRouter([
    {
      path: "/",
      element:   <Main></Main> ,
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

      ]
    },
    {
      path:'dashboard',
      element:  <Dashboard></Dashboard> ,
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
         element:  <Payment></Payment>
        },
        { 
         path: 'instructorclasses',
         element:  <InstructorsClasses></InstructorsClasses>
        },
        { 
         path: 'studentpsyments',
         element:  <StudentPayments></StudentPayments>
        },
        { 
         path: 'studenthome',
         element:  <StudentHome></StudentHome>
        },
      ]
    }
]);

export default router;