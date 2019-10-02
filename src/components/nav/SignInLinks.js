import React from 'react'
import { NavLink } from 'react-router-dom'

const SignedInLinks=()=> {
    return (
        <div className="nav-link">
        <NavLink to='/'>Log Out</NavLink>
        --
        <NavLink to='/create'>New Project</NavLink>
        --
        <NavLink to='/' className='btn btn-floating pink lighten-1'>Don</NavLink>
        </div>
    )
}

export default SignedInLinks