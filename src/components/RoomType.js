import React, { Component } from 'react'
import RoomCard from './RoomCard'
import DatePicker from 'react-datepicker'

import {postReservation} from '../API'


export default class RoomType extends Component {

    state = {
        allRooms: [],
        rooms: [],
        startDate: new Date(),
        endDate: new Date(),
        guests: '1',
        stayDays: 1
    }

    componentDidMount() {
        fetch('http://localhost:3010/rooms')
        .then((resp) => resp.json())
        .then((rooms) => this.setState({
            allRooms: rooms,
            rooms: rooms
        }))
    }

    setStayDays = () =>{
        const date1 = this.state.startDate
        const date2 = this.state.endDate

        const timeDifference = date1.getTime() - date2.getTime()
        // console.log(timeDifference);

        const dayDifference = timeDifference  / (1000 * 3600 * 24)
        // console.log(dayDifference);

        const raundDayDifference = Math.round(dayDifference)
        // console.log(raundDayDifference);

        const actualDays = raundDayDifference - raundDayDifference - raundDayDifference
        // console.log(actualDays);

        this.setState({
            stayDays: actualDays
        })
    }

    handleInputChange = (event) => {
        this.setState({
            [event.target.id]: event.target.value,
        });
    };

    handleSubmit = (event) => {
        event.preventDefault();
        this.setStayDays()
        // const filter = this.state.rooms.map(room => room.max_guest <= this.state.stayDays)
        // this.setState({
        //     rooms: filter
        // })
    }

    hundleBook = (roomID) => {
        const reservationData = {
            check_in: this.state.startDate,
            check_out: this.state.endDate,
            user_id:   this.props.user.id,
            room_id: roomID
        }

        console.log(reservationData);

        postReservation(reservationData)
    }

    render() {
        return (
            <div className='roomType'>
                <div className='dateContainer sticky'>
                    <form onSubmit={this.handleSubmit}>
                            
                            <label>Checkin Date: </label>
                            <DatePicker
                            selected={ this.state.startDate }
                            onChange={date => this.setState({
                                startDate: date
                            })} 
                            name="startDate"
                            dateFormat="MM/dd/yyyy"
                            />

                            <label>Chechout Date: </label>
                            <DatePicker
                            selected={ this.state.endDate }
                            onChange={date => this.setState({
                                endDate: date
                            })} 
                            name="endDate"
                            dateFormat="MM/dd/yyyy"
                            />

                            <label>Number of guests: </label>
                            <input type='text' id="guests"
                            onChange={this.handleInputChange}
                            value={this.state.guest} placeholder='guests'
                            defaultValue='1'
                            />
                            
                            <button className="btn btn-success" type='submit'>
                                Search
                            </button>
                    </form>
                </div>
                <div className="">
                {this.state.rooms.map((room) => 
                <RoomCard
                key={room.id}
                room={room}
                stayDays={this.state.stayDays}
                hundleBook={this.hundleBook}
                user={this.props.user}
                />
                )}
                </div>
            </div>
        )
    }
}
