import React, {Fragment} from 'react';
import Search from './../Search ';
import UserList from './../UserList';

const Home =() => {
    return(
            <Fragment>
              <Search
              //  text={searchUser}
              // clearUser={clearUser}
              // setAlert={showAlert}
              ></Search>
              <UserList></UserList>
            </Fragment>
    )
}

export default Home;