import React from 'react'
import {Link} from "react-router-dom"

const Header = () => {
    return (
        <header className="header">
            <h1>DATA HISTORY OF COVID</h1>
            <div className="nav">
                <Link to="/" > Home</Link>
                <Link to="/corona">Corona</Link>
            </div>
        </header>
    )
}

export default Header
