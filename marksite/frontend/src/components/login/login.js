import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loginRegister } from '../../actions/UserActions';
import "./login.css";

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            input1Classes: 'input',
            input2Classes: 'input',
            buttonClasses: 'submit',
            errorMessage: '',
            authenticated: false,
        }
        this.storage = window.localStorage;
    }

    UNSAFE_componentWillMount = () => {
        if(this.storage.getItem("user_work","user_skill","user")) {
            this.props.history.push('/main');
        }
    }

    submit = route => {
        const { username, password } = this.state;
        if(username !== '' && password !== '') {
            this.props.loginRegister({username, password}, route)
            .then(res => {
                const { status } = res.payload;
                if(status === 200 || status === 201) {
                    const string = JSON.stringify(res.payload.data.user);
                    window.localStorage.setItem("user", string);
                    this.setState({
                        username: '',
                        password: '',
                        input1Classes: 'input',
                        input2Classes: 'input',
                        buttonClasses: 'submit',
                    }, () => this.props.history.push('/main'));
                }
            })
        }
    }

    render = () => {
        const { username, password, input1Classes, input2Classes, buttonClasses } = this.state;
        const { errorMessage } = this.props;
        return (
            <div className='login'>
            <div className='login_1'>
            <h1>Login</h1>
            {
                errorMessage !== '' &&
                <h2>{errorMessage}</h2>
            }
            <div className={input1Classes}>
            <label htmlFor="username">Username:</label>
            <input
            type='text'
            id="username"
            name='username'
            value={username}
            onChange={e => this.setState({username: e.target.value})}
            onFocus={e => this.setState({input1Classes: 'input input-focus'})}
            onBlur={e => {
                if(username === '') this.setState({input1Classes: 'input'})
            }} />
            </div>
            <div className={input2Classes}>
            <label htmlFor="password">Password:</label>
            <input
            type='password'
            id='password'
            name='password'
            value={password}
            onChange={e => this.setState({password: e.target.value})}
            onFocus={e => this.setState({input2Classes: 'input input-focus'})}
            onBlur={e => {
                if(password === '') this.setState({input2Classes: 'input'})
            }} />
            </div>
            <div className='buttons'>
            <button
            onClick={() => this.submit('register')}
            className={buttonClasses}>New Game</button>
            <button
            onClick={() => this.submit('login')}
            className={buttonClasses}>Continue</button>
            </div>
            </div>
            </div>
        );
    }
}

const MSP = state => {
    return {
        errorMessage: state.UserReducer.errorMessage
    }
}

export default connect(MSP, { loginRegister })(Login);