import React, { Component } from 'react'
import './SignUp.css'


class SignUp extends Component {
    state={
        email: '',
        password: '',
        firstName:'',
        lastName: ''
    }
    handleChange=e=>{
        this.setState({
            [e.target.id] : e.target.value
        })
    }
    handleSubmit=(e)=>{
        e.preventDefault()
    }
    render() {
        return (
            <div className='container-block'>
                <form onSubmit={this.handleSubmit} className='white'>
                    <h5 className="text">Sign Up</h5>
                    <br />
                    <div className="input-field">
                        <input type="email" id="email" placeholder='Email' onChange={this.handleChange} className='input-line' />
                    </div>
                    <br />
                    <div className="input-field">
                        <input type="password" id="password" placeholder='Password' onChange={this.handleChange} className='input-line' />
                    </div>
                    <br />
                    <div className="input-field">
                        <input type="text" id="firstName"placeholder='First Name'  hintText='Enter Your First Name' onChange={this.handleChange} className='input-line' />
                    </div>
                    <br />
                    <div className="input-field">
                        <input type="text" id="lastName" placeholder='Last Name' hintText='Enter Your Last Name' onChange={this.handleChange} className='input-line' />
                    </div>
                    <br />
                    <div className="input-field">
                        <button className="btn">Sign Up</button>
                    </div>
                </form>

                
            </div>
        )
    }
}

export default SignUp
