import React, { Component } from 'react'
import {Link} from 'react-router-dom';

export default class RoomCard extends Component {

    handleClick = () => {
        this.props.hundleBook(this.props.room.id)
    }


    render() {
        return (
            <div className="col-sm-1 col-md-10 border room-container">
                    <h3>{this.props.room.name}</h3>
                    <div className='room-img'>
                        <img src={this.props.room.img} width="25%" alt='Room IMG'/>
                    </div>
                    <div className='room-content'>
                        <h4>{this.props.room.description}</h4>
                        <h2>Price: £{this.props.room.price * this.props.stayDays}</h2>
                        {this.props.user.username === null ? 
                        <Link to='/login'>
                        <button>
                            You must be login to book
                        </button>
                        </Link>
                        :
                        <Link to='/myReservations'>
                        <button onClick={this.handleClick}>
                            Book
                        </button>
                        </Link>
                        }
                    </div>
            </div>
        )
    }
}

