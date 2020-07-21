import React, { Component } from 'react'
import {Link} from 'react-router-dom';
export default class Nav extends Component {
    render() {
        return (
            // <div className='nav'>
            //     <nav>
            //         <Link to='/'>
            //             <h3 className='text-white'>Home</h3>
            //         </Link>
            //         <Link to='/login'>
            //             <h3 className='text-white'>Login</h3>
            //         </Link>
                    // <Link to='/signUp'>
                    //     <h3 className='text-white'>Sign up</h3>
                    // </Link>
                    // <Link to='/myAccount'>
                    //     <h3 className='text-white'>My Account</h3>
                    // </Link>
            //     </nav>
            //     <button onClick={this.props.logOut}>
            //     Logout
            //     </button>
            // </div>
            <nav className="navbar navbar-default">
                <div className="container-fluid">
                    <div className="navbar-header">
                    <ul className="nav navbar-nav">
                        <li className="active">
                        <Link to='/'>
                            <h3>Home</h3>
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
                        <li className="active">
                        <Link to='/myAccount'>
                        <h3>My Account</h3>
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
        )
    }
}
