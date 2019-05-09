import React, {Component} from 'react';
import './Landing.css';
import logo from "../header/logo.png";

export default class Header extends Component {
    render() {
        return (
            <div className="landing">
                <div id="inspirational-text">
                    Some inspirational shit
                </div>
                <div id="mission-statement">
                    We focus on some other cool shit tbc later.
                </div>
                <div className="search-bar">
                    
                </div>
            </div>
        )
    }
}