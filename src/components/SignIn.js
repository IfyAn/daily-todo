import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import serializeForm from 'form-serialize';

class Login extends Component {

    handleSubmit(e){
        e.preventDefault()
        const value = serializeForm(e.target, {hash: true});
        this.props.changeParentState('loging',true); // to display loading paragraph to user
        
        if(value){
            const url = 'https://daily-todo-api.herokuapp.com/api/v1/login';

            axios.post(url,value)
            .then(response => {
                if(response.data.status === 'success'){
                    this.props.changeParentState('userDetails', response.data.data);
                    // get notes if available
                    const text = `https://daily-todo-api.herokuapp.com/notes/${response.data.data.id}`;
                    axios.post(text, {token: response.data.data.token})
                    .then(answer => {
                        // todos will be an array with objects representing notes
                        this.props.changeParentState('todos', answer.data.data) 
                        this.props.changeUrlPath.push('/home');
                    })  

                }else{
                    this.props.changeParentState('loging', false);
                    this.props.changeParentState('logingErr', true);
                }
            })
            .catch(e => {
                this.props.changeParentState('loging', false);
                this.props.changeParentState('logingErr', true);
                console.log(e)
            })
        }
    }

    render(){
        return(
            <div className='login'>
                <form onSubmit={ (e) => this.handleSubmit(e)}>
                    <input 
                        type='text '
                        name='email'
                        placeholder='sample@email.com'
                        required
                    />
                    <input 
                        type='text '
                        name='password'
                        placeholder='password'
                        required
                    />
                    <button>Login</button>
                    <p><span>Not a registered member yet? <Link to='/signup'>register</Link></span></p>
                </form>
                {this.props.progress ? <p> Loading, please wait</p> : null}
                {this.props.handlelogingErr ? <p> wrong email or password combination or check your network</p> : null}
            </div>
        );
    }
}

export default Login; 