import React, {Component} from "react";
import './RegisterPopup.css';

export default class RegisterPopup extends Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        alert('Thanks, you will hear back from us soon!');
        // insert submit clause for the name --> add to newsletter list (some mysql list or smth)
        event.preventDefault();
    }

    render () {
        return (
            <div className="register-popup">
                <div className="register-popup-header">
                    This is a popup!
                </div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        <input type="text" placeholder="Enter your first name"/>
                        <input type="text" placeholder="Enter your last name"/>
                        <input type="text" placeholder="Enter your e-mail address"/>
                        <input type="text" placeholder="Enter your phone number"/>
                    </label>
                    <input type="cancel" value="Cancel"/>
                    <input type="submit" value="Submit"/>
                </form>
            </div>
        )
    }
}

// TODO (kevinli): Add a terms/conditions thing