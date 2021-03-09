import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const Details = () => {
    const { userId } = useParams();
    const [user, setUser] = useState({})
    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/users/${userId}`
        fetch(url)
        .then(res => res.json())
        .then(data=>setUser(data))
    }, [])
    return (
        <div>
            <h3>User Details Id No { userId}</h3>
            <h5>Name : { user.name}</h5>
            
        </div>
    );
};

export default Details;