import React, { Component } from 'react'
//import './SignUp.css'

class SignIn extends Component {
    state={
        email: '',
        password: ''
    }
    handleChange=e=>{
        this.setState({
            [e.target.id] : e.target.value
        })
    }
    handleSubmit=e=>{
        e.preventDefault()
    }
    render() {
        return (
            <div className='container-block'>
                <form onSubmit={this.handleSubmit} className='white'>
                    <h5 className="text">Sign In</h5>
                    <div className="input-field">
                        <input type="email" id="email" placeholder='Email' className='input-line' onChange={this.handleChange}/>
                    </div>
                    <br/>
                    <div className="input-field">
                        <input type="password" placeholder='Password' id="password"className='input-line'  onChange={this.handleChange}/>
                    </div>
                    <br/>
                    <div className="input-field">
                        <button className="btn">Log Out</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignIn
