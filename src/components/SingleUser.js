import React,{Fragment, useEffect, useContext} from 'react';
import Spinner from './Spinner';
import Repos from './Repos'
import {Link} from 'react-router-dom';
import GithubContext from './../context/github/GithubContext';


const SingleUser = ({match}) => {

    const githubContext = useContext(GithubContext);

    useEffect(()=>{
        githubContext.getSingleUser(match.params.login);
        githubContext.getUserRepos(match.params.login);

        //eslint-disable-next-line
    },[]);


        const {name,avatar_url,location,bio,blog,login,html_url,followers,following,public_repos,public_gists,company}=githubContext.users;


        if(githubContext.loading) return <Spinner />;


        return(
            <Fragment>
                <div className="container">
                    <Link to="/" className="btn btn-light btn-block mb-2">Back to Search</Link>
                    <div className="card">
                        <div className="row mx-4">
                            <div className="col col-md-6">
                                <img src={avatar_url} className="rounded-circle my-2" alt="" style={{width:'150px'}}></img>
                                <h1>{name}</h1>
                                <p>Location: {location}</p>
                            </div>
                            <div className="col col-md-6 my-2">
                                {bio && (<Fragment>
                                        <h3>Bio</h3>
                                        <p>{bio}</p>
                                    </Fragment>)}
                                    <a href={html_url} className="btn btn-dark my-1">Visit Github Profile</a>
                                    <ul style={{listStyleType:"none"}}>
                                        <li>{login && <Fragment>
                                            <strong>Username: </strong>{login}
                                            </Fragment>}
                                        </li>
                                        <li>{company && <Fragment>
                                            <strong>Company: </strong>{company}
                                            </Fragment>}
                                        </li>
                                        <li>{login && <Fragment>
                                            <strong>Website: </strong>{blog}
                                            </Fragment>}
                                        </li>
                                    </ul>

                            </div>
                        </div>
                        
                    </div>
                    <div className="card my-2">
                        <div className="row my-2">
                            <div className="text-center align-items-center" style={{margin:'auto'}}>
                            <span className="badge badge-primary mx-2">Followers:{followers}</span>
                            <span className="badge badge-success mx-2">Following:{following}</span>
                            <span className="badge badge-danger mx-2">Public Repos:{public_repos}</span>
                            <span className="badge badge-dark mx-2">Public Gists:{public_gists}</span>
                            
                            </div>
                        </div>
                    </div>
                    
                </div>

                <Repos repos={githubContext.repos}></Repos>
            </Fragment>

        )
}


// SingleUser.propTypes ={
//     loading:PropTypes.bool,
//     user:PropTypes.object.isRequired,
//     repos: PropTypes.array.isRequired,
//     getSingleUser:PropTypes.func.isRequired,
//     getUserRepos:PropTypes.func.isRequired
// };

export default SingleUser;