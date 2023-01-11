import React from 'react'
import { Link } from 'react-router-dom';
import "./HeaderBarItem.css";

export const HeaderBarItem = (props) => {
    const { name, route } = props;

    return (
        <div className="Header-Item">
            <Link to={route} className="Header-Item-Link">{name}</Link>
        </div>
    )
}

export default HeaderBarItem;