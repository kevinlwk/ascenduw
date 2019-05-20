import React, {Component} from 'react';
import './Landing.css';
import NameForm from '../../components/nameForm/NameForm.js'
import landing from './landing.jpeg';

export default class Header extends Component {
    render() {
        return (
            <div className="landing">
                <img src={landing} alt="Landing" className="landing-img"/>
                <div className="landing-details">
                    <div id="inspirational-text" className="landing-text">
                        Looking to expand your connections?
                    </div>
                    <div id="mission-statement" className="landing-text">
                        Sign up to learn more.
                    </div>
                    <div id="submit-button" className="landing-text">
                        <NameForm/>
                    </div>
                </div>
            </div>
        )
    }
}