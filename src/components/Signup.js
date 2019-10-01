import React, { Component } from 'react'
import './Signup.css'


class Signup extends Component {
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
            <div className='container'>
                <form onSubmit={this.handleSubmit} className='white'>
                    <h5 className="text">Sign Up</h5>
                    <br />
                    <div className="input-field">
                        <label htmlFor="email">Email : </label>
                        <input type="email" id="email" onChange={this.handleChange}/>
                    </div>
                    <br />
                    <div className="input-field">
                        <label htmlFor="password">Password : </label>
                        <input type="password" id="password" onChange={this.handleChange}/>
                    </div>
                    <br />
                    <div className="input-field">
                        <label htmlFor="firstName">First Name : </label>
                        <input type="text" id="firstName" hintText='Enter Your First Name' onChange={this.handleChange}/>
                    </div>
                    <br />
                    <div className="input-field">
                        <label htmlFor="lastName">Last Name : </label>
                        <input type="text" id="lastName" hintText='Enter Your Last Name' onChange={this.handleChange}/>
                    </div>
                    <br />
                    <div className="input-field">
                        <button className="btn">Sign Up</button>
                    </div>
                </form>

                <footer className="text-capitalize text-center">
                   Copy@2019
                </footer>
            </div>
        )
    }
}

export default Signup
