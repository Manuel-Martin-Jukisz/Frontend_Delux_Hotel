export const logInUser = (userData) => {
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
        }).then((data) => console.log(data))
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