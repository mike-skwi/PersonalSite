import React from 'react'
import { Link } from 'react-router-dom';

export const HeaderBarItem = (props) => {
    const { name, route } = props;


    return (
        <Link to={route} className="Header-Item-Link">{name}</Link>
    )
}

export default HeaderBarItem;