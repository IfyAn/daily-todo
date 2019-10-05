import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'

const SignedInLinks=()=> {
    return (
        <div className='right'>
        <NavLink to='/' className='gold'>LogOut--</NavLink>
        <NavLink to='/create'>New Project--</NavLink>
        <NavLink to='/' className='btn btn-floating pink lighten-1'>Don</NavLink>
        </div>
    )
}

export default SignedInLinks