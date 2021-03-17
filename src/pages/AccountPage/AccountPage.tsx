import React, { useEffect, useState } from 'react'
import Axios from 'axios';
import './AccountPage.css';

const AccountPage: React.FC = () => {

        const [profileInfo, setProfileInfo] = useState<any>({
            profilePicture: "",
            email: "",
            channelName: "",
        });

        useEffect(() => {
            const id  = sessionStorage.getItem('googleId');
            Axios.get(`http://localhost:5000/user/${id}`).then((response) => {
                console.log(response)
                setProfileInfo({
                    channelName: response.data[0].channelName,
                    profilePicture: response.data[0].profilePictureUrl,
                    email: response.data[0].email,
                })
            })
        }, []);

    return (
        <div className="AccountPage">
            <div className="Container">
                <div className="TitleContainer">
                    <h1>Channel Details</h1>
                </div>
                <div className="BodyContainer">
                    <h1>{profileInfo.channelName}</h1>
                    <img src={profileInfo.profilePicture} />
                </div>
            </div>
        </div>
    )
}

export default AccountPage

