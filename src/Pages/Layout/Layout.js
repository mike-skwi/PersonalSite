import React from 'react'

export const Layout = () => {
    const headerItems = [
        { name: 'Home', route: '/home' }
    ]

    return (
        <>
            <header className="App-header" >
                <p>Mike Skwierawski</p>
                {/* TODO: Make a header button component */}
                {/* Header Items Component, map through list of header items */}
                <div className="Header-items">
                    <p> Home </p>
                    <p> About </p>
                    <p> Portfolio </p>
                    <p> Contact Page </p>
                </div>
            </header>
            <body>
                <p> Rest of the text goes here</p>
            </body>
            <footer>
                <p>:)</p>
            </footer>
        </>
    )
}
