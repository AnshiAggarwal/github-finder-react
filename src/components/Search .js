import React, {useState, useContext} from 'react';
// import propTypes from 'prop-types';
import GithubContext from './../context/github/GithubContext';
import AlertContext from './../context/alert/AlertContext'

const Search = () =>{

    const githubContext = useContext(GithubContext);
    const alertContext = useContext(AlertContext);


    const [val, setVal]=useState('');

    const onChange=(e)=>{
        setVal(e.target.value);
        // console.log(this.state.text);
    }


    const onSubmit=(e)=>{
        e.preventDefault();

        if(val === ""){
            alertContext.setAlert("please enter something");
        }
        else{
            githubContext.searchUser(val);
            setVal('');
        }

    }


        return(
            <div className='container'>
                <form className="form" onSubmit={onSubmit}>
                    <div className="form-group">

                    <input type="text" name="text" placeholder="search for github user....." className="form-control border-primary mb-2" onChange={onChange} value={val}></input>

                    <input type="submit" name="search" className="form-control btn btn-dark"></input>
                    </div>

                    {githubContext.users.length>0 && 
                     <button className="btn btn-light btn-block mb-2" 
                            onClick={githubContext.clearUser}>
                            Clear
                            </button>
                    }

                </form>
            </div>
        );
}


// Search.propTypes={
//     clearUser:propTypes.func.isRequired,
//     showClear:propTypes.bool.isRequired
// }

export default Search;