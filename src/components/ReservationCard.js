import React, { Component } from 'react'
import {fetchDeleteReservation} from '../API'
import {userReservation} from '../API'

export default class ReservationCard extends Component {
    state = {
        check_in: '',
        check_out: '',
        img: '',
        price: '',
        name: ''
    }

    componentDidMount(){
        fetch(`http://localhost:3010/rooms/${this.props.data.room_id}`)
        .then((data) => data.json())
        .then((res) => {
            return res;
        })
        .then((data) => {
            this.setState({
                name: data.name,
                price: data.price,
                img: data.img
            })
        })
    }
    handleDelete = () => {
        fetchDeleteReservation(this.props.data.id)
        this.props.filterRooms(this.props.data.id)
    }
    
    render() {
        return (   
            <div className="col-sm-0 col-md-5 border margin-right text-align">
                <h3>
                    Room name: {this.state.name}
                </h3>
                <img src={this.state.img} width="50%" alt='Event' />
                <div>
                <h4>
                checkin date:{this.props.data.check_in}
                </h4>
                <h4>
                checkout date:{this.props.data.check_out}
                </h4>
                <button className='btn btn-danger' onClick={this.handleDelete}>
                    delete
                </button>
                </div>
            </div>
        )
    }
}
