import React, { Component } from 'react'

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
    
    render() {
        return (
            <div>
                <h3>
                    Room name{this.state.name}
                </h3>
                <img src={this.state.img} width="5%" alt='Event Image' />
                <div>
                <h4>
                checkin date:{this.props.data.check_in}
                </h4>
                <h4>
                checkout date:{this.props.data.check_out}
                </h4>
                </div>
            </div>
        )
    }
}
