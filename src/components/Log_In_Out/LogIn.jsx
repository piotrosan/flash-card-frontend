import React, { useState } from 'react';
import Logging from "../../helpers/logs/Logging";
import axios from 'axios';

import './logIn.css';
import {AppUserContext} from "../../settings";

function LogInForm(props) {

    const LoginUrl = '/auth/login'

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [userContext, setUserContext] = useState(null);

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            let result = await axios.post(LoginUrl, {'email': email, 'password': password});
            setUserContext(result)
        } catch (err) {
            await Logging({'app': props.app, 'level': 1, 'message': err.response?.data?.message})
            setError(err.response?.data?.message || 'Login error');
        }

    };

    <AppUserContext.Consumer>
        appUsereContext => appUsereContext.user = userContext)
    </AppUserContext.Consumer>

    return (
        <div className="loginForm">
            <form onSubmit={handleSubmit}>
                {error && <p style={{ color: 'red' }}>{error}</p>}
                <div>
                    <label htmlFor="username">Username</label>
                    <input
                        type="text"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button type="submit">LogIn</button>
            </form>
        </div>
    );
}

export default LogInForm;
