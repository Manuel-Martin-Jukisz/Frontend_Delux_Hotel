import React, { Component } from 'react'
import { updateUser } from '../API';
import { Redirect } from 'react-router-dom';
import {Link} from 'react-router-dom';

export default class UpdateDetails extends Component {
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

    handleInputChange = (event) => {
        this.setState({
            [event.target.id]: event.target.value,
        });
    };

    handleSubmit = (event) => {
        event.preventDefault();
        event.target.reset();
        const { setUser } = this.props

        const { id, username, name, phone } = this.state;
        const userData = { username, name, phone };

        updateUser(id, userData, setUser)
        alert(`Your details have been update`)

    }

    render() {
        return (
            // <div className='text-align'>
            //     <h2>Update my information</h2>
            //     <form onSubmit={this.handleSubmit}>
            //         <label>Username</label>
            //             <input
            //                 id="username"
            //                 onChange={this.handleChange}
            //                 value={this.state.username}
            //                 placeholder='Username'
            //             />
            //         <br></br>
            //         <label>Name</label>
            //         <input
            //             id="name"
            //             onChange={this.handleChange}
            //             value={this.state.name}
            //             placeholder='name'
            //         />
            //         <br></br>
            //         <label>Email</label>
            //         <input
            //             type="phone"
            //             id="phone"
            //             onChange={this.handleChange}
            //             value={this.state.phone} placeholder='phone'
            //         />
            //         <br></br>
            //         <button type='submit'>Submit</button>
            //         </form>
            // </div>
            <div className='background'>
                <div className='container'>
                    <div className="d-flex justify-content-center h-100">
                        <div className="cart">
                            <div className="card-header">
                                <h3 className='no-reser'>Update Details</h3>
                            </div>
                            <div className="card-body">
                                <form onSubmit={this.handleSubmit}>
                                    <div className="input-group form-group">
                                        <div className="input-group-prepend">
                                        <label className='no-reser'>Username</label>
                                        </div>
                                        <input type="text" className="form-control margin-left" id="username" onChange={this.handleInputChange} value={this.state.username} placeholder='Username' />
                                    </div>
                                    <div className="input-group form-group">
                                        <div className="input-group-prepend">
                                        <label className='no-reser'>Name</label>
                                        </div>
                                        <input id="name"
                                        className="form-control margin-left"
                                        onChange={this.handleInputChange}
                                        value={this.state.name} placeholder='name'
                                        />
                                    </div>
                                    <div className="input-group form-group">
                                        <div className="input-group-prepend">
                                        <label className='no-reser'>Phone</label>
                                        </div>
                                        <input id="phone"
                                        className="form-control margin-left"
                                        onChange={this.handleInputChange}
                                        value={this.state.phone} placeholder='phone'
                                        />
                                    </div>
                                    
                                    
                                    <div className="form-group">
                                        <Link to='myAccount'>
                                            <button className="btn float-right login_btn back-btn">
                                                Back
                                            </button>
                                        </Link>
                                        <input type="submit" value="Update" className="btn float-right login_btn"/>
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
