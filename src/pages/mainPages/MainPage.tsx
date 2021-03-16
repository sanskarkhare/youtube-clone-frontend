import React from 'react';
import './MainPage.css';
import Sidebar from '../../components/sidebar/Sidebar';

export default function MainPage() {
    return (
        <div className="MainPage">
            <div className="center">
                <Sidebar />
                <div className="VideoView"></div>
            </div>
        </div>
    )
}
