import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import About from './components/pages/About';
import Alert from './components/Alert';
import Home from './components/pages/Home';
// import Search from './components/Search ';
// import UserList from './components/UserList';
import SingleUser from './components/SingleUser';
// import Axios from 'axios';
import GithubState from './context/github/GithubState';
import AlertState from './context/alert/AlertState';
import NotFound from './components/pages/NotFound';

const App = () => {

  // const [users, setUsers]= useState([]);
  // const [singleuser, setSingleuser]= useState({});
  // const [repos, setRepos]= useState([]);
  // const [loading, setLoading]= useState(false);
  // const [alert, setAlert]= useState(null);


  // const searchUser=async text=>{
  //   setLoading(true);

  //   const res = await Axios.get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
  //   //console.log(res.data);

  //   setLoading(false);
  //   setUsers(res.data.items);

  // }


  // const getSingleUser=async(username)=>{
  //   setLoading(true);

  //   const res = await Axios.get(`https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
  //   //console.log(res.data);

  //   setSingleuser(res.data);
  //   setLoading(false);
  // }



  // const getUserRep=async(username)=>{
  //   setLoading(true);

  //   const res = await Axios.get(`https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);

  //   setLoading(false);
  //   setRepos(res.data);
  // }



  // const clearUser = (e) => {
  //   e.preventDefault();
  //   setUsers([]);
  //   setLoading(false);
  // };


  // const showAlert=(msg)=>{
  //   setAlert(msg);

  //   setTimeout(()=>{setAlert(null)},5000);
  // }

    return (
      <GithubState>
      <AlertState>
      <Router>
      <div className="App">
        <Navbar name="GITHUB FINDER USING REACT"></Navbar>
        <Alert></Alert>
        <Switch>
          <Route exact path="/" 
            component={Home}
          >
            
          </Route>

          <Route exact path="/About" component={About}>
          </Route>

          <Route exact path="/User/:login" component={SingleUser}
          ></Route>
          <Route component={NotFound}></Route>
        </Switch>
      </div>
      </Router>
      </AlertState>
      </GithubState>
    );

}

export default App;
