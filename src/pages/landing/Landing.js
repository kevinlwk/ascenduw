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
                        Some inspirational shit
                    </div>
                    <div id="mission-statement" className="landing-text">
                        We focus on some other cool shit tbc later.
                    </div>
                    <div id="submit-button" className="landing-text">
                        <NameForm></NameForm>
                    </div>
                </div>
            </div>
        )
    }
}