export const logInUser = (userData, setUser) => {
    fetch("http://localhost:3010/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
        },
        body: JSON.stringify({ user: userData }),
        })
        .then((res) => res.json())
        .then((res) => {
            localStorage.setItem("jwt", res.jwt);
            return res;
        })
        .then((res) => {
            setUser(res.user)
            return res;
        })
        .then(console.log)
}

export const createNewUser = (userData) => {
    fetch("http://localhost:3010/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
        },
        body: JSON.stringify({ user: userData }),
        })
        .then((res) => res.json())
        .then((res) => {
            localStorage.setItem("jwt", res.jwt);
            return res;
        }).then((data) => console.log(data))
        
        
}

export const updateUser = (id, body, setUser) => {
    fetch(`http://localhost:3010/users/${id}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
        },
        body: JSON.stringify(body),
    })
    .then((res) => res.json())
    .then(setUser)
}

const getToken = () => localStorage.getItem("jwt");

// const getUser = () => JSON.parse(atob(this.getToken().split(".")[1]));


export const validateToken = () => {
    return fetch("http://localhost:3010/validate", {
        headers: {
            Authorization: `Bearer ${ getToken() }`,
        }
    })
    .then(res => res.json())
}

export const getRooms = () => {
    return fetch('http://localhost:3010/rooms')
}

export const postReservation = (reservationData) => {
    fetch("http://localhost:3010/reservations", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
        },
        body: JSON.stringify({ reservation: reservationData }),
        })
        .then((res) => res.json())
        .then(console.log)
    }

export const userReservation = (userId) => { 
    fetch('http://localhost:3010/reservations')
    .then((data) => data.json())
    .then((res) => {
            return res;
        })
    .then((data) =>data.filter(reservation => reservation.user_id === userId))
}

export const eventById = (id) => {
    fetch(`http://localhost:3010/reservations/${id}`)
        .then((data) => data.json())
        .then((res) => {
            return res;
        })
} 