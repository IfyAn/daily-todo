import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Home extends Component{
    state ={
        buttonStyle: false
    }
    handleClick = (e) => {
        e.preventDefault()
        this.setState({buttonStyle: true});
        const url = `https://daily-todo-api.herokuapp.com/api/v1/notes/${e.target.getAttribute('noteid')}`;
        const reqBody = {
            token: this.props.userDetails.token,
            user_id: this.props.userDetails.id
        };
        axios.post(url, reqBody)
        .then( ans => {
            if(ans.data.status === 'success'){
                this.props.handleParentStateChangeAsync((prevState) => {
                    return {todos: ans.data.data}
                });
                this.setState({buttonStyle: false});
                this.props.history.push('/home');
            }
            
        })
        .catch(e => {
            console.log(e)
        })
    }

    render(){
        return (
            this.props.userDetails ? 
            (<div className='todo-container'>
                <div className='todo-navigation'>
                    <span>MarioPlan</span>
                    <Link to='/create-project'>New Project</Link>
                    <Link to='/'>Logout</Link>
                </div>
                <h2>Projects</h2>
                {this.props.todos.length ?
                    this.props.todos.map((todo) => {
                        return (
                            <ul key={todo.note + `${todo.author}`} className='todo'>
                                <li>
                                    <h2>{todo.author}</h2>
                                    <p>{todo.note}</p>
                                    <span>{todo.time}</span>

                                    <button 
                                    noteid={todo.note_id}
                                    style={this.state.buttonStyle ? {backgroundColor: 'red'}: {backgroundColor: 'white'}}
                                    onClick={(e) => this.handleClick(e)}>X</button>
                                </li>

                            </ul>
                        );
                    })  : null
                    
                }
            </div>) : <p>Please <Link to='/signup'>Sign Up</Link> or <Link to='/'>Login</Link> </p>
        );
    }
}

export default Home;