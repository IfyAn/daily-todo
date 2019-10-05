import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import SignInLinks from './SignInLinks'
import SignOutLinks from './SignOutLinks'


const Navbar=()=> {
    return (
        <nav className="navbar mx-auto">
            <div className="container">
                <Link to='/' className="nav ">MyPlan</Link>
                <SignInLinks />
                <SignOutLinks />
            </div>
        </nav>
    )
}

export default Navbar