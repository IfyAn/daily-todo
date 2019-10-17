import React, { Component } from 'react';
import serializeForm from 'form-serialize';
import { Link } from 'react-router-dom';
import axios from 'axios';

class NewProject extends Component{
    handleCreate = (e) => {
        e.preventDefault();
        const values = serializeForm(e.target,{hash: true});
        values.token = this.props.userDetails.token;
        values.user_id = this.props.userDetails.id;
        const url = 'https://daily-todo-api.herokuapp.com/api/v1/notes';
        this.props.handleParentStateChange('creating', true);

        axios.post(url, values)
        .then( ans => {
            if(ans.data.status === 'success'){
                this.props.handleParentStateChange('todos', ans.data.data);
                this.props.handleParentStateChange('creating', false);
                this.props.history.push('/home');
            }else{
                this.props.handleParentStateChange('creating', false);
                this.props.handleParentStateChange('creatingErr', true)
            }
            
        })
        .catch( e => {
            console.log(e);
            this.props.handleParentStateChange('creating', false);
            this.props.handleParentStateChange('creatingErr', true);

        })

    }

    render(){
        return (
            <div>
                <div className='navigation'>
                    <span>MarioPlan</span>
                    <Link to='/create-project'>NewProject</Link>
                    <Link to='/'>Logout</Link>
                    <div className='navigation-circle'></div>
                </div>
                <h2>Create New Project</h2>
                <form onSubmit={ (e) => this.handleCreate(e)}>
                    <input 
                        type='text '
                        name='author'
                        placeholder='Project Title'
                        required
                    />
                    <input 
                        type='text '
                        name='note'
                        placeholder='Project Content'
                        required
                    />
                    <button>Create Project</button>
                </form>
                {this.props.creating && <p>Creating ....</p>}
                {this.props.creatingErr && <p>An error ocurred, please check your console</p>}
            </div>
        );
    }
}

export default NewProject;