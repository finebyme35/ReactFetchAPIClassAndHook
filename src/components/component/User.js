import { useEffect, useState } from "react";


function User() {
    const [users, setUser] = useState(null);
    const getUser = () => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => setUser(data))
    }
    useEffect(() => {
        getUser()
    }, [])
    return(
        <>
            <h1>User Page!</h1>
            <hr />
            { users ? 
                users.map(user => 
                <>
                    
                    <h1>{user.id} - {user.name}</h1>
                    <h3>{user.username}</h3>
                    <label>{user.email}</label>
                    <p>{user.address.street} - {user.address.suite}</p>
                </>)
                     :
                <h1>Loading...</h1>}
        </>
    )
}

export default User;