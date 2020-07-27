import React, { Component } from 'react'
import {logInUser} from '../../API';
import { Redirect } from 'react-router-dom';

export default class Login extends Component {

    state = {
        username: '',
        password: '',
    };


    handleInputChange = (event) => {
        this.setState({
            [event.target.id]: event.target.value,
        });
    };
    refreshPage = ()=>{
        window.location.reload(false);
    }

    handleSubmit = (event) => {
        event.preventDefault();
        event.target.reset();

        const {username , password} = this.state;
        const userData = {username, password};

        logInUser(userData, this.props.setUser);
    }

    render() {
        return (
            <div className='text-align'>
                {this.props.user.id != 0 ? <Redirect to="/roomstype"/> : null}
                <h2>Login</h2>
                <div className='Login'>
                    <form onSubmit={this.handleSubmit}>
                    <label>Username</label>
                        <input id="username"
                        onChange={this.handleInputChange}
                        value={this.state.username}
                        placeholder='Username' 
                        />
                    <br></br>
                    <label>password</label>
                    <input type="password" id="password"
                    onChange={this.handleInputChange}
                    value={this.state.password} placeholder='password'
                    />
                    <br></br>
                    <button type='submit'>Submit</button>
                    </form>
                </div>
            </div>
        )
    }
}