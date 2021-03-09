import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import "./user.css"
const User = (props) => {
    // console.log("User",props);
    const { name, email, phone ,id} = props.user;

    const history = useHistory();
    const seeDetails = (userId) => {
     history.push(`/user/${userId}`)
    }

    return (
        <div className="user">
            <h2>Name : { name}</h2>
            <h3>Email : { email}</h3>
            <h4>Phone : {phone}</h4>
            {/* <Link  to={`/user/${id}`}><button className="user-btn"  >See Details</button></Link>  */}
            <button className="user-btn"  onClick={()=>seeDetails(id)}>See Details</button>        
        </div>
    );
};

export default User;