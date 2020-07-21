import React, { Component } from 'react'
import {createNewUser} from '../API';

export default class Login extends Component {

    state = {
        username: '',
        password: '',
        name: '',
        phone: ''
    };


    handleInputChange = (event) => {
        this.setState({
            [event.target.id]: event.target.value,
        });
    };

    handleSubmit = (event) => {
        event.preventDefault();
        event.target.reset();

        const {username , password, name, phone} = this.state;
        const userData = {username, password, name, phone};

        createNewUser(userData);
    }

    render() {
        return (
            <div className='text-align'>
                <h2>Sign up</h2>
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
                    <label>Name</label>
                    <input id="name"
                    onChange={this.handleInputChange}
                    value={this.state.name} placeholder='name'
                    />
                    <br></br>
                    <label>Phone</label>
                    <input id="phone"
                    onChange={this.handleInputChange}
                    value={this.state.phone} placeholder='phone'
                    />
                    <br></br>
                    <button type='submit'>Submit</button>
                    </form>
                </div>
            </div>
        )
    }
}