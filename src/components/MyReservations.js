import React, { Component } from 'react'
// import {userReservation} from '../API'
import ReservationCard from './ReservationCard'

export default class MyReservations extends Component {
    state = {
        myReservations: []
    }

    componentDidMount(){
        fetch('http://localhost:3010/reservations')
        .then((data) => data.json())
        .then((res) => {
                    return res;
                })
        .then((data) =>data.filter(ticket => ticket.user_id === this.props.user.id))
        .then((data) => {
            this.setState({
                myReservations: data
            })
        })
    }
    
    filterRooms = (id) => {
        const data=this.state.myReservations.filter(room => room.id !== id)
        this.setState({
            myReservations: data
        })
    }
    render() {
        return (
            <div className=''>
                {this.state.myReservations.length === 0 ? <h3 className='no-reser'>You have no reservations at the moment</h3> : <h2 className='text-align'>
                    This are your Reservations
                </h2>}
                
                <div className="">
                {this.state.myReservations.map((reservation) =>
                    <ReservationCard
                        key={reservation.id}
                        data={reservation}
                        filterRooms={this.filterRooms}
                        setUser={this.props.setUser}
                    />
                )}
                </div>
            </div>
        )
    }
}

