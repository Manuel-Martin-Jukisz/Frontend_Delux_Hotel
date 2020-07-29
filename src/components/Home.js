import React, { Component } from 'react'
import {Link} from 'react-router-dom';

export default class Home extends Component {
    render() {
        return (
            <div className="banner">
                <div className="">
                    <div className="banner-text">
                        <div className="banner-heading">
                            Welcome to Deluxe Palace Hotel
                        </div>
                        <div className="banner-sub-heading">
                            Book your stay in the heart of London today
                        </div>
                        <Link to='roomstype'>
                            <button className="">
                                Book Now
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}