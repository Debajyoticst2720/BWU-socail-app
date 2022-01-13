import React from 'react'
import { Link } from 'react-router-dom'
import Menu from './Menu'
import Search from './Search'

const Header = () => {

    return (
        <div className="header">
            <nav className="navbar navbar-expand-lg navbar-light 
            justify-content-between align-middle">

                <Link to="/" className="logo">
                    <h2 className="navbar-brand text-uppercase p-0 m-0"
                    onClick={() => window.scrollTo({top: 0})}>
                        BWUNETIC
                    </h2>
                </Link>

                <Search />

                <Menu />
            </nav>
        </div>
    )
}

export default Header
