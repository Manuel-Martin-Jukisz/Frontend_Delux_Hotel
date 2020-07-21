import React, { Component } from 'react'

export default class Room extends Component {

    handleClick = () => {
        this.props.hundleBook(this.props.room.id)
    }

    render() {
        return (
            <div className="room-container">
                    <h3>{this.props.room.name}</h3>
                    <div className='room-img'>
                        <img src={this.props.room.img} width="25%" alt='Room IMG'/>
                    </div>
                    <div className='room-content'>
                        <h4>{this.props.room.description}</h4>
                        <h2>Price: £{this.props.room.price * this.props.stayDays}</h2>
                        <button onClick={this.handleClick}>
                            Book
                        </button>
                    </div>
            </div>
        )
    }
}

