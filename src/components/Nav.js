import React, { Component } from 'react'
import {Link} from 'react-router-dom';


export default class Nav extends Component {
    render() {
        if(!this.props.user.username){
            return(
                <header>
                <nav className="bar">
                        <div className="container-fluid">
                            <div className="navbar-header">
                            <ul className="nav navbar-nav">
                                <li className="active">
                                <Link to='/'>
                                    <h3>Home</h3>
                                </Link>
                                </li>
                                <li className="active">
                                <Link to='/roomstype'>
                                    <h3>Rooms</h3>
                                </Link>
                                </li>
                                <li className="active">
                                <Link to='/login'>
                                    <h3>Login</h3>
                                </Link>
                                </li>
                                <li className="active">
                                <Link to='/signUp'>
                                    <h3>Sign up</h3>
                                </Link>
                                </li>
                            </ul>
                            </div>
                        </div>
                    </nav>
                </header>
            )
        } else {
            return (
                <header>
                    <nav className="bar">
                        <div className="container-fluid">
                            <div className="navbar-header">
                            <ul className="nav navbar-nav">
                                <li className="active">
                                <Link to='/'>
                                    <h3>Home</h3>
                                </Link>
                                </li>
                                <li className="active">
                                <Link to='/roomstype'>
                                    <h3>Rooms</h3>
                                </Link>
                                </li>
                                <li className="active">
                                <Link to='/myAccount'>
                                <h3>My Account</h3>
                                </Link>
                                </li>
                                <li className="active">
                                <Link to='/myReservations'>
                                <h3>My Reservations</h3>
                                </Link>
                                </li>
                                <li className="active">
                                <Link to='/login' onClick={this.props.logOut}>
                                <h3>Logout</h3>
                                </Link>
                                </li>
                            </ul>
                            </div>
                        </div>
                    </nav>
                </header> 
            )
        }
    }
}
