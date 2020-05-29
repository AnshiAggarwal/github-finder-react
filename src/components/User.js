import React from 'react';
import './../App.js';
import {Link} from 'react-router-dom';
// import UserList from './UserList.js'

const User= (props) => {

        const {login, id, avatar_url} = props.user;

        return(
            <div className="container">
                <div className="card text-center border-dark">
                    <h2>{login}</h2>
                    <h3>login id: {id}</h3>
                    <div className="text-center mb-2">
                        <img src={avatar_url} className="card-img-bottom mb-2" alt="person profile pic" style={{width:'10%', height:'auto'}}></img><br></br>
                        <Link to={`/User/${login}`} className="btn btn-dark">More</Link>

                    </div>
                   
                </div>
            </div>
        )
    // }
}

export default User;