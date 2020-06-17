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
        this.handleDemoUser = this.handleDemoUser.bind(this)
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        })
    }

    handleDemoUser() {
        let user = {username: 'Brunna',
        password: 'brunna123'}
    this.props.processForm(user).then(this.props.closeModal)
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
        const display = (this.props.formType === "signup") ? (
        <label>
              <input type="text"
                placeholder="Email"
                value={this.state.email}
                onChange={this.update('email')}
                className="login-input"
            />
        </label>) :
        ""
        
        return (
            <div className="login-form-container">
                <form onSubmit={this.handleSubmit} className="login-form-box">
                    <div className="welcome">Welcome to Sincere Eats! Please {this.props.formType}</div> 
                    {/* <div className='welcome'>Please {this.props.formType}</div>  */}
                    {this.renderErrors()}
                    <div className="login-form">
                        <div className='username-and-password'>
                        <label className='login-input-label'>
                            <div className='login-text'> Username/Email </div>
              <input type="text"
                                placeholder=""
                                value={this.state.username}
                                onChange={this.update('username')}
                                className="login-input"
                            />
                        </label>
                        <label className='login-input-label'>
                            <div className='login-text'> Password </div>
              <input type="password"
                            placeholder=""
                            value={this.state.password}
                            onChange={this.update('password')}
                            className="login-input"
                            />
                        </label>
                        </div>
                        {display}
                        <div className='input-boxes'>
                            <input className="session-submit" type="submit" value={this.props.formType} />  
                                {(this.props.formType === "login") ? 
                            <button
                                className="session-submit" onClick={this.handleDemoUser}>Demo User
                            </button> : "" }  
                        </div>                      
                    </div>
                </form>
            </div>
        );
    }
}

export default SessionForm;