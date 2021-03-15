import React, { useState } from 'react';
import './Navbar.css';
import YouTubeIcon from '@material-ui/icons/YouTube';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AddBoxIcon from '@material-ui/icons/AddBox';

const Navbar: React.FC = () => {

            const [loggedin, setIsLoggedin] = useState(false);

    return (
        <div className="navbarContainer">
            <div className="left">
                <button id="sidebarToggle">
                    <MenuIcon id="icon"/>
                </button>
                <YouTubeIcon id="icon" style={{ color: "red"}} />
                <h1>YouTube</h1>
            </div>
            <div className="center">
                <input id="searchBar" placeholder="Search"/>
                <button id="searchButton">
                    <SearchIcon style={{ color: "grey" }}/>
                </button>
            </div>
            <div className="right">
                <button id="createVideo">
                    <AddBoxIcon  id="icon"/>
                </button>
                {loggedin ? (
                        <button id="profilePic"></button>
                    ) : ( 
                        <button id="signinButton">Sign In</button>
                )}
            </div>
        </div>
    )
}

export default Navbar;

