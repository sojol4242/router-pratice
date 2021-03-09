import User from '../user/User';
import { useEffect, useState } from 'react';
import React from 'react';

const Main = () => {
    
  const [users, setUser] = useState([])

  useEffect(() => {
   
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res=>res.json())
    .then(data =>{ 
    // console.log(data)
      setUser(data)})
 

  }, [])
    return (
      <>
       <h1 className="title">Users {users.length}</h1>
      <div className="users"> 
      {
        users.map(user=> <User user={user} key={user.id}/> )
      }
      </div>
      </>
    );
};

export default Main;