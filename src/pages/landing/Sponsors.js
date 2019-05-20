import React, {Component} from "react";
import './Sponsors.css';
import manulifeLogo from './assets/logos/manulife-logo.png';
import rbcLogo from './assets/logos/rbc-logo.svg';
import tdLogo from './assets/logos/td-logo.png';
import bmoLogo from './assets/logos/bmo-logo.png';
import cibcLogo from './assets/logos/cibc-logo.png';
import kpmgLogo from './assets/logos/kpmg-logo.png';
import deloitteLogo from './assets/logos/deloitte-logo.png';
import pwcLogo from './assets/logos/pwc-logo.png';
import eyLogo from './assets/logos/ey-logo.png';
import loblawsLogo from './assets/logos/loblaws-logo.png';
import scotiabankLogo from './assets/logos/scotiabank-logo.jpeg';
import blakesLogo from './assets/logos/blakes-logo.png';
import casselbrockLogo from './assets/logos/casselbrock-logo.png';
import faskenLogo from './assets/logos/fasken-logo.png';
import ibmLogo from './assets/logos/ibm-logo.png';
import mccarthytetraultLogo from './assets/logos/mccarthytetrault-logo.png';
import microsoftLogo from './assets/logos/microsoft-logo.png';
import opgLogo from './assets/logos/opg-logo.png';
import stikemanelliotLogo from './assets/logos/stikemanelliot-logo.png';
import sunlifeLogo from './assets/logos/sunlife-logo.png';
import catalystLogo from './assets/logos/catalyst.png';
import dyversityLogo from './assets/logos/dyversity.png';
import shivancheLogo from './assets/logos/shivanche-logo.png';
import tenthousandcoffeesLogo from './assets/logos/10kcoffees.png';



export default class Sponsors extends Component {
    render () {
        return (
            <div className="sponsors">
                <h1>Special thanks to our supporters</h1>
                <h2>Platinum</h2>
                <div className="sponsor-bracket" id="sponsor-platinum">
                    <img src={manulifeLogo} alt="Manulife" id="manulife" className="sponsor-image"/>
                    <img src={rbcLogo} alt="RBC" id="rbc" className="sponsor-image"/>
                    <img src={tdLogo} alt="TD" id="td" className="sponsor-image"/>
                </div>
                <h2>Gold</h2>
                <div className="sponsor-bracket" id="sponsor-gold">
                    <img src={bmoLogo} alt="BMO" id="bmo" className="sponsor-image"/>
                    <img src={cibcLogo} alt="CIBC" id="cibc" className="sponsor-image"/>
                    <img src={kpmgLogo} alt="KPMG" id="kpmg" className="sponsor-image"/>
                    <img src={deloitteLogo} alt="Deloitte" id="deloitte" className="sponsor-image"/>
                    <img src={pwcLogo} alt="PwC" id="pwc" className="sponsor-image"/>
                    <img src={eyLogo} alt="EY" id="ey" className="sponsor-image"/>
                </div>
                <h2>Silver</h2>
                <div className="sponsor-bracket" id="sponsor-silver">
                    <img src={loblawsLogo} alt="Loblaws" id="loblaws" className="sponsor-image"/>
                    <img src={scotiabankLogo} alt="Scotiabank" id="scotiabank" className="sponsor-image"/>
                </div>
                <h2>Bronze</h2>
                <div className="sponsor-bracket" id="sponsor-bronze">
                    <img src={blakesLogo} alt="Blakes" id="blakes" className="sponsor-image"/>
                    <img src={casselbrockLogo} alt="Cassels Brock" id="cassels-brock" className="sponsor-image"/>
                    <img src={faskenLogo} alt="Fasken" id="fasken" className="sponsor-image"/>
                    <img src={ibmLogo} alt="IBM" id="ibm" className="sponsor-image"/>
                    <img src={mccarthytetraultLogo} alt="McCarthy Tetrault" id="mccarthy-tetrault" className="sponsor-image"/>
                    <img src={microsoftLogo} alt="Microsoft" id="microsoft" className="sponsor-image"/>
                    <img src={opgLogo} alt="Ontario Power Generation" id="ontario-power-generation" className="sponsor-image"/>
                    <img src={stikemanelliotLogo} alt="Stikeman Elliot" id="stikeman-elliot" className="sponsor-image"/>
                    <img src={sunlifeLogo} alt="Sunlife" id="sunlife" className="sponsor-image"/>
                </div>
                <h2>Strategic Partners</h2>
                <div className="sponsor-bracket" id="sponsor-strategic">
                    <img src={catalystLogo} alt="Catalyst" id="catalyst" className="sponsor-image"/>
                    <img src={dyversityLogo} alt="Dyversity" id="dyversity" className="sponsor-image"/>
                    <img src={shivancheLogo} alt="Shivanche" id="shivanche" className="sponsor-image"/>
                    <img src={tenthousandcoffeesLogo} alt="Ten Thousand Coffees" id="ten-thousand-coffees" className="sponsor-image"/>
                </div>
            </div>
        )
    }
}