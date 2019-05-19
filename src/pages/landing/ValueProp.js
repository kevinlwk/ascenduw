import React, {Component} from 'react';
import connect from './connect.svg';
import inspire from './inspire.svg';
import ascend from './ascend.svg';
import './ValueProp.css';

export default class Header extends Component {
    render() {
        return (
            <div className="value-prop">
                <div className="detail">
                    <img src={connect} alt="Connect" id="connect-img"/>
                    <h2>Connect.</h2>
                    <div className="blurb">blah</div>
                </div>
                <div className="detail">
                    <img src={inspire} alt="Inspire" id="inspire-img"/>
                    <h2>Inspire.</h2>
                    <div className="blurb">lorem ipsum</div>
                </div>
                <div className="detail">
                    <img src={ascend} alt="Ascend" id="ascend-img"/>
                    <h2>Ascend.</h2>
                    <div className="blurb">dolor</div>
                </div>
            </div>
        )
    }
}