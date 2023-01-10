import React from 'react'
import { Outlet, Link } from "react-router-dom";

export const Layout = () => {
    return (
        <>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/portfolio">Portfolio</Link>
                    </li>
                    {/* <li>
                        <Link to="/Contact">Contact</Link>
                    </li> */}
                </ul>
            </nav>

            <Outlet />
        </>
    )
}

export default Layout;