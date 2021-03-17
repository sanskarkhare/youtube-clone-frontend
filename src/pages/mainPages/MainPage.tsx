import React, { useContext } from 'react';
import './MainPage.css';
import Sidebar from '../../components/sidebar/Sidebar';
import { ToggleSidebarContext } from '../../Helpers/Context';

export default function MainPage() {
    const { showSidebar, setShowSidebar } = useContext(ToggleSidebarContext);

    return (
        <div className="MainPage">
            <div className="center">
                {showSidebar && <Sidebar />}
                <div className="VideoView"></div>
            </div>
        </div>
    )
}
