import React from 'react'
import { Outlet } from "react-router-dom";
import './Layout.css';

// TODO: fix barreling
import { HeaderBar } from '../../Components/HeaderBar/HeaderBar.tsx'

export const Layout = () => {
    return (
        <div className="Layout-container">
            <div className="Header-container">
                <h1>Mike Skwierawski</h1>
                <HeaderBar />
            </div>
            <Outlet />
        </div>
    )
}

export default Layout;