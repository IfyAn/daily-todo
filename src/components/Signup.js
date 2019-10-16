import React, { Component } from 'react';
import serializeForm from 'form-serialize';
import { Link } from 'react-router-dom';
import axios from 'axios';

class Signup extends Component{

    handleSignup = (e) => {
        e.preventDefault();
        const values = serializeForm(e.target, {hash: true});
        this.props.handleParentStateChange('signupLoading', true)

        if(values){
            const url = 'https://daily-todo-api.herokuapp.com/api/v1/users';
            axios.post(url, values)
            .then(result => {
                if(result.data.status === 'success'){
                    this.props.history.push('/');

                }else{
                    this.props.handleParentStateChange('signupLoading', false);
                    this.props.handleParentStateChange('signupLoadingErr', true) 
                }

            })
            .catch( e => {
                console.log(e)
                this.props.handleParentStateChange('signupLoading', false);
                this.props.handleParentStateChange('signupLoadingErr', true) 
            })
        }

    }

    render(){
        return (
            <div onSubmit={(e) => this.handleSignup(e)} className='signup'>
                <div className='signup-navigation'>
                    <span>MarioPlan</span>
                    <Link to='/signup'>Signup</Link>
                    <Link to='/'>Login</Link>
                </div>
                <form className='signup-form'>
                    <input
                        type='email'
                        name='email'
                        placeholder='Email'
                        required
                    />
                    <input
                        type='password'
                        name='password'
                        placeholder='Password'
                        required
                    />
                    <input
                        type='text'
                        name='firstName'
                        placeholder='First Name'
                        required
                    />

                    <input
                        type='text'
                        name='lastName'
                        placeholder='Last Name'
                        required
                    />
                    <button>SIGN UP</button>
                </form>
                {this.props.signupLoading ? <p> Loading, please wait</p> : null}
                {this.props.signupLoadingErr ? <p> wrong email or password combination or check your network</p> : null}
            </div>
        );
    }
}

export default Signup;