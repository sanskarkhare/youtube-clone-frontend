import React, { useState, useEffect } from 'react';
import './Navbar.css';
import YouTubeIcon from '@material-ui/icons/YouTube';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import { url } from 'inspector';

const Navbar: React.FC = () => {

            const [loggedin, setIsLoggedin] = useState<boolean>(true);
            const [profilePicture, setProfilePicture] = useState<string>("");

            useEffect(() => {
                if (sessionStorage.getItem("loggedIn") === "true") {
                    setIsLoggedin(true);
                  setProfilePicture(sessionStorage.getItem("imageUrl") as string);
                }
              }, [sessionStorage.getItem("loggedIn")]);

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
                    <VideoCallIcon  id="icon"/>
                </button>
                {loggedin ? (
                        <img 
                            id="profilePic"
                            src={profilePicture}
                        />
                    ) : ( 
                        <button id="signinButton" onClick={() => {
                            window.location.pathname = "signin"
                        }}>Sign In</button>
                )}
            </div>
        </div>
    )
}

export default Navbar;

