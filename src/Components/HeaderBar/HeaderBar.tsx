import React from 'react'
import { HeaderBarItem } from '../HeaderBarItem/HeaderBarItem.tsx'

export const HeaderBar = () => {

    const headerItems = [
        { name: 'Home', route: '/' },
        { name: 'About', route: '/about' },
        { name: 'Portfolio', route: '/portfolio' },
        { name: 'Contact', route: '/contact' },
    ]

    // TODO: Make this collapsible if on mobile

    return (
        <>
            {headerItems.map(i =>
                <HeaderBarItem name={i.name} route={i.route} />
            )}
        </>
    )
}

export default HeaderBar;