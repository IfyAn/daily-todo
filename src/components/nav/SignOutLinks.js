import React from 'react'
import { NavLink } from 'react-router-dom'

const SignedOutLinks=()=> {
    return (
        <div className="right ">
            <NavLink to='/signup'>Sign Up--</NavLink>
            <NavLink to='/signin'>Login </NavLink>
        </div>
    )
}

export default SignedOutLinks