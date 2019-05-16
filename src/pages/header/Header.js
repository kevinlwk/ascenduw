import React, {Component} from 'react';
import {NavLink, HashRouter} from "react-router-dom";
import logo from './logo.png';
import './Header.css';

export default class Header extends Component {
    render() {
        return (
            <HashRouter>
                <div className="header">
                    <ul className="menu-ul">
                        <li className="logo">
                            <NavLink exact to="/">
                                <img src={logo} className="Ascend-logo" alt="logo" />
                            </NavLink>
                        </li>
                        <li className="content">
                            <NavLink exact to="/" className="text-button">
                                <h1>Home</h1>
                            </NavLink>
                        </li>
                        <li className="content">
                            <NavLink exact to="/about-us" className="text-button">
                                <h1>About Us</h1>
                            </NavLink>
                        </li>
                        <li className="content">
                            <NavLink exact to="/contact-us" className="text-button">
                                <h1>Contact Us</h1>
                            </NavLink>
                        </li>
                        <li className="content">
                            <NavLink exact to="/register" className="register">
                                <h1>Register</h1>
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </HashRouter>
        )
    }
}
