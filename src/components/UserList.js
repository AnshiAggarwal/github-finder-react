import React, { useContext } from 'react';
import User from './User.js';
import Spinner from './Spinner.js';
import GithubContext from './../context/github/GithubContext';

const UserList = () => {

    const githubContext = useContext(GithubContext);


        if(githubContext.loading){
            return(
                <Spinner></Spinner>
            )
        }
        else{
            return(
                <div>
                    <div>
                        {githubContext.users.map(user=>
                                               (<User key={user.id} user={user}></User>)
                                                )}
                    </div>
    
                </div>
            )
        }

}



export default UserList;