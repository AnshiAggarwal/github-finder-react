import React from 'react';
import {Link} from 'react-router-dom';
import propTypes from 'prop-types';
import '../App.js';



const Navbar =(props) => {
        return(
            
            <nav className="navbar navbar-dark bg-dark text-white mb-3">
                <div className="navbar-brand">{props.name}</div>

                <ul>
                    <li className="navbar-text mr-2"><Link to="/">Home</Link></li>
                    <li className="navbar-text"><Link to="/About">About </Link></li>
                </ul>
            </nav>
        );
    // }

}

Navbar.defaultProps={
    name:'GITHUB FINDER USING REACT'
}

Navbar.propTypes={
    name: propTypes.string.isRequired
}

export default Navbar;