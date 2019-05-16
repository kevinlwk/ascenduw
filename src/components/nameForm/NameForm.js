import React, {Component} from "react";
import './NameForm.css';

export default class NameForm extends Component {
    constructor(props) {
        super(props);
        this.state = {value: 'Enter your email address'};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        alert('Thanks, you will hear back from us soon!');
        // insert submit clause for the name
        event.preventDefault();
    }

    render() {
        return (
            <div className="submit-bar">
                <form onSubmit={this.handleSubmit}>
                    <label>
                        <input type="text" value={this.state.value} onChange={this.handleChange} />
                    </label>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        );
    }
}
