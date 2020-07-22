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
        .then((data) =>data.filter(ticket => ticket.user_id === 1))
        .then((data) => {
            this.setState({
                myReservations: data
            })
        })
    }

    // checkTicketsOwn = () => {
    //     const array = []

    //     for(let i = 0; i < this.state.myTickets.length; i++){
    //         const eventId= this.this.state.myTickets[i].event_id
    //         console.log(eventId);
    //         array.push(eventId)
    //     }
    //     console.log(array);
    //     return array
    // }

    render() {
        return (
            <div className='text-align'>
                <h2>
                    This are your Reservations
                </h2>
                {this.state.myReservations.map((reservation) =>
                    <ReservationCard
                        key={reservation.id}
                        data={reservation}
                    />
                )}
            </div>
        )
    }
}

