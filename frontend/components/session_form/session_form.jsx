import React from 'react';
import { closeModal } from '../../actions/modal_actions';

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            email: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user).then(this.props.closeModal)
        }

    renderErrors() {
        return (
            <ul>
                {this.props.errors.map((error, i) => (
                    <li key={`error-${i}`}>
                        {error}
                    </li>
                ))}
            </ul>
        );
    }
    render() {
        // debugger
        const display = (this.props.formType === "signup") ? (
        <label>
              <input type="text"
                placeholder="Email"
                value={this.state.email}
                onChange={this.update('email')}
                className="login-input"
            />
            <br/>
        </label>) :
        ""
        
        return (
            <div className="login-form-container">
                <form onSubmit={this.handleSubmit} className="login-form-box">
                    <div className="welcome">Welcome to Sincere Eats!</div> 
          <br />
                    <div className='welcome'>Please {this.props.formType}</div> 
                    {this.renderErrors()}
                    <div className="login-form">
                        <br />
                        <label>
              <input type="text"
                                placeholder="Username"
                                value={this.state.username}
                                onChange={this.update('username')}
                                className="login-input"
                            />
                        </label>
                        <br />
                        <label>
              <input type="password"
                                placeholder="Password"
                                value={this.state.password}
                                onChange={this.update('password')}
                                className="login-input"
                            />
                        </label>
                        <br />
                        {display}
                        <br />
                        <input className="session-submit" type="submit" value={this.props.formType} />                        
                    </div>
                </form>
            </div>
        );
    }
}

export default SessionForm;