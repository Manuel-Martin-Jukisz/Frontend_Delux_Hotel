import React, { Component } from 'react'
import {Link} from 'react-router-dom';
export default class Nav extends Component {
    render() {
        return (
            <div className='nav'>
                <nav>
                    <Link to='/'>
                    <h3 className='text-white'>Home</h3>
                    </Link>
                    <Link to='/login'>
                        <h3 className='text-white'>Login</h3>
                    </Link>
                    <Link to='/signUp'>
                        <h3 className='text-white'>Sign up</h3>
                    </Link>
                </nav>
            </div>
        )
    }
}
