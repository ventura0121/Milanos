import { Link, useMatch, useResolvedPath } from "react-router-dom"
import logo from '../components/logo.jpeg'
import React, { Component }  from 'react';

export default function Navbar() {
  return (
    <nav className="nav">
      <Link to="/" className="site-title">
        <img src={logo} style = {{height: 120, width: 120}} alt="website logo"/>
        {/* <div>Milano's Masonry</div> */}
      </Link>
      <ul><CustomLink to="/">Home</CustomLink>
        <CustomLink to="/Services">Services</CustomLink>
        {/* <CustomLink to="/Projects">Projects</CustomLink> */}
        <CustomLink to="/About">About</CustomLink>
        <CustomLink to="/Contact">Contact Us</CustomLink>
      </ul>
    </nav>
  )
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  )
}