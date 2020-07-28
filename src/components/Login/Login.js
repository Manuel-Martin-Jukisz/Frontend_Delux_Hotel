import React, { Component } from 'react'
import {logInUser} from '../../API';
import { Redirect, Link } from 'react-router-dom';

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
        alert(`Welcome back ${this.state.username}`)
    }

    render() {
        return (
            // <div classNameName='text-align'>
            //     {this.props.user.id != 0 ? <Redirect to="/roomstype"/> : null}
            //     <h2>Login</h2>
            //     <div classNameName='Login'>
            //         <form onSubmit={this.handleSubmit}>
            //         <label>Username</label>
            //             <input id="username"
            //             onChange={this.handleInputChange}
            //             value={this.state.username}
            //             placeholder='Username' 
            //             />
            //         <br></br>
            //         <label>password</label>
                    // <input type="password" id="password"
                    // onChange={this.handleInputChange}
                    // value={this.state.password} placeholder='password'
                    // />
            //         <br></br>
            //         <button type='submit'>Submit</button>
            //         </form>
            //     </div>
            // </div>
            <div className='background'>
            <div className='container'>
                {this.props.user.id !== 0 ? <Redirect to="/roomstype"/> : null}
                <div className="d-flex justify-content-center h-100">
                    <div className="cart">
                        <div className="card-header">
                            <h3>Sign In</h3>
                        </div>
                        <div className="card-body">
                            <form onSubmit={this.handleSubmit}>
                                <div className="input-group form-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text"><i className="fas fa-user"></i></span>
                                    </div>
                                    <input type="text" className="form-control margin-left" id="username" onChange={this.handleInputChange} value={this.state.username} placeholder='Username' />
                                </div>
                                <div className="input-group form-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text"><i className="fas fa-key"></i></span>
                                    </div>
                                    <input type="password" id="password"
                                    className="form-control margin-left"
                                    onChange={this.handleInputChange}
                                    value={this.state.password} placeholder='password'
                                    />
                                </div>
                                <div className="form-group">
                                    <input type="submit" value="Login" className="btn float-right login_btn"/>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        )
    }
}