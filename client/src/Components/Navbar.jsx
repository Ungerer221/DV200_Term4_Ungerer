import React from "react";
import './Navbar.css';

import {Nav} from 'react-bootstrap'

const Navbar = () => {

    
    return (
        <>
            <div className="navbar-con">
                <div className="navbar-logo">Logo</div>
                <div className="navbar-page-links">
                    <Nav.Link className="navbar-page-links-options" href='/Home'>Home</Nav.Link>
                    <Nav.Link className="navbar-page-links-options" href='/Profile'>Profile</Nav.Link>
                    <Nav.Link className="navbar-page-links-options" href='/#'>Adim</Nav.Link>
                    <Nav.Link className="navbar-page-links-options" href='/SignIn'>Signout</Nav.Link>
                    <Nav.Link className="navbar-page-links-options" href='/Signup'>Sign Up</Nav.Link>
                </div>
                <button>hello</button>
            </div>
        </>
    )
}
export default Navbar