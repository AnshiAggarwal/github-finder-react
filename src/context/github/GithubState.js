import React, {useReducer} from 'react';
import Axios from 'axios';
import GithubContext from './GithubContext'
import GithubReducer from './GithubReducer';
import {
    SEARCH_USERS,
    GET_USER,
    CLEAR_USER,
    GET_REPOS,
    SET_LOADING
} from './../types';

const GithubState =(props) => {

    const initialState ={
        users:[],
        singleuser: {},
        repos:[],
        loading:false
    }

    const [state, dispatch]= useReducer(GithubReducer, initialState);

    //search Users

    const searchUser=async text=>{
        setLoading();
    
        const res = await Axios.get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
    
        // setLoading(false);
        dispatch({type: SEARCH_USERS,
                  payload: res.data.items});
        // setUsers(res.data.items);
    
    }

    //GetUsers


    const getSingleUser=async(username)=>{
        setLoading();
    
        const res = await Axios.get(`https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);

        dispatch({
            type:GET_USER,
            payload:res.data
        })
    
        // setSingleuser(res.data);
        // setLoading(false);
      }


    //Clear users

    const clearUser = () => {
        // e.preventDefault();

        dispatch({type:CLEAR_USER,
        payload:[]});
        // setUsers([]);
        // setLoading(false);
    };

    //GetRepos

    const getUserRepos=async(username)=>{
        setLoading();
    
        const res = await Axios.get(`https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);

        dispatch({
            type: GET_REPOS,
            payload: res.data
        })
    
        // setLoading(false);
        // setRepos(res.data);
      }

    //SetLoading

    const setLoading =() => {dispatch({type: SET_LOADING})}

    return <GithubContext.Provider
        value={{
            users:state.users,
            singleuser: state.singleuser,
            repos: state.repos,
            loading: state.loading,
            searchUser,
            clearUser,
            getSingleUser,
            getUserRepos
        }}
        >
            {props.children}

    </GithubContext.Provider>

}

export default GithubState;