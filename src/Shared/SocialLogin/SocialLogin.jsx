import React, { useContext } from 'react';
import { AuthContext } from '../../Pages/Providers/AuthProviders';
import { useLocation, useNavigate } from 'react-router-dom';

const SocialLogin = () => {
    const {googleSignIn} = useContext(AuthContext)
    const navigate = useNavigate();
    const location = useLocation();
  
    const from = location.state?.from?.pathname || "/";
    const handleGoogleLogin = () => {
        googleSignIn()
        .then(result => {
            const loggedInUser = result.user
            console.log(loggedInUser);
            const savedUser = { name: loggedInUser.displayName, email: loggedInUser.email }
            fetch('https://zamaddar-sports-club-server.vercel.app/users', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(savedUser)
            })
                .then(res => res.json())
                .then(() => {
                    navigate(from, { replace: true });
                })
        })
    }
    return (
        <div>
            <div className="divider"></div> 
            <h1 className='text-center text-xl font-bold pb-5'>social login</h1>
            <button onClick={handleGoogleLogin} className='btn btn-primary w-full'>Google</button>
        </div>
    );
};

export default SocialLogin;