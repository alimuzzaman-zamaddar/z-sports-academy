import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../Pages/Providers/AuthProviders";


const PrivateRoute = ({children}) => {
    const location = useLocation()
    console.log(location)
    const {user,loading} = useContext(AuthContext)
    if(loading){
        return <progress className="progress w-56"></progress>
    }
    if(user?.role == 'instructor'){
        return children
    }
    return <Navigate state={{from: location}}  to='/login' replace ></Navigate>
};

export default PrivateRoute;