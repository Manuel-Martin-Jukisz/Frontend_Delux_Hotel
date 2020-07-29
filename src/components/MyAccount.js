import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import { updateUser } from '../API';

export default class MyAccount extends Component {
    state = {
        id: 0,
        name: '',
        username: '',
        phone: '',
    }

    componentDidMount() {
        if (this.props.user.id) {
            this.setState(this.props.user)
        }
    }

    handleChange = ({ target: { id, value } }) => {
        this.setState({ [id]: value })
    }


    render() {
        return (
            // <div className='text-align'>
            //     <h3>My account</h3>
                // <h3>Username:{this.props.user.username}</h3>
                // <h3>Name:{this.props.user.name}</h3>
                // <h3>phone:{this.props.user.phone}</h3>
            // <Link to='/updatedetails'>
            // <button>
            //     Update details
            // </button>
            // </Link>
            // </div>
            <div className='background'>
                <div className='container'>
                    <div className="d-flex justify-content-center h-100">
                        <div className="cart">
                            <div className="card-header">
                                <h3 className='no-reser'>My Account Details</h3>
                            </div>
                            <div className="card-body">
                                <div className="input-group-prepend">
                                    <label className='no-reser'>Username:</label>
                                </div>
                            <label className='form-control margin-left' >{this.props.user.username}</label>
                            <div className="input-group-prepend">
                                    <label className='no-reser'>Name:</label>
                                </div>
                            <label className='form-control margin-left' >{this.props.user.name}</label>
                            <div className="input-group-prepend">
                                    <label className='no-reser'>Phone:</label>
                                </div>
                            <label className='form-control margin-left' >{this.props.user.phone}</label>
                            <Link to='/updatedetails'>
                            <button className="btn float-right login_btn">
                                Update details
                            </button>
                            </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
