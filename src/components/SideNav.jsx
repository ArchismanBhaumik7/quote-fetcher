import React from 'react'
import { createBrowserRouter, Link } from 'react-router-dom'

const SideNav = () => {
    return (
        <div>
            <nav>
                <Link to='/'><li>Home</li></Link>
                <Link to='/quotes'><li>Quotes</li></Link>
            </nav>
        </div>
    )
}

export default SideNav
