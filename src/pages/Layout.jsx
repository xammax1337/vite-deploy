import React from 'react'
import { Outlet, Link, NavLink } from "react-router-dom"

const Layout = () => {
  return (
    <>
    <header className="header">
        <h1 className="headText">Max Samuelsson</h1>
        <nav className="navbar">
            <ul>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/contact">Contact</NavLink></li>
                <li><NavLink to="/projects">Projects</NavLink></li>
                <li><NavLink to="https://github.com/xammax1337" target="_blank">GitHub</NavLink></li>
            </ul>
        </nav>
    </header>
    <Outlet />
    <footer>
        <p><a href="mailto:contact@maxsamuelsson.se">contact@maxsamuelsson.se</a></p>
        <p><NavLink to="https://github.com/xammax1337" target="_blank">GitHub</NavLink></p>
        <p>&copy; 2024 Max Samuelsson</p>
    </footer>
    </>
  )
}

export default Layout