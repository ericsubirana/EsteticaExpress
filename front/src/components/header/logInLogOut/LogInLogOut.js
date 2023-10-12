import React from 'react'
import { Link } from 'react-router-dom';
import "./loginlogout.css"

function logInLogOut(props) {
    const user = props.user;

    return (
        <div className='loginlogout'>
            {!user && (
                <div>
                    <Link className='login' to={"/login"}>LOGIN</Link>
                    <Link className='register' to={"/register"}>SIGN UP</Link>
                </div>
            )}
            {user && (
                <div>
                    <Link className='profile' to={"/profile"}>Profile</Link>
                    <Link className='logout' to={"/logout"}>Logout</Link>
                </div>
            )}
        </div>
    )
}

export default logInLogOut