import React, {Component} from 'react';
import {NavLink, HashRouter} from "react-router-dom";
import logo from './logo.png';
import './Header.css';

export default class Header extends Component {
    render() {
        return (
            <HashRouter>
                <div>
                    <ul className="menu-ul">
                        <li className="logo">
                            <NavLink exact to="/">
                                <img src={logo} className="Ascend-logo" alt="logo" />
                            </NavLink>
                        </li>
                        <li className="content">
                            <NavLink exact to="/" className="text-button">
                                Home
                            </NavLink>
                        </li>
                        <li className="content">
                            <NavLink exact to="/about-us" className="text-button">
                                About Us
                            </NavLink>
                        </li>
                        <li className="content">
                            <NavLink exact to="/contact-us" className="text-button">
                                Contact Us
                            </NavLink>
                        </li>
                        <li className="content">
                            <NavLink exact to="/register" className="register">
                                Register
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </HashRouter>
        )
    }
}
