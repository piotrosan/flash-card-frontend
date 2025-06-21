import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import Logging from "../../helpers/logs/Logging";
import {AppUserContext} from "../../settings";

function LogInForm(props) {

    const LoginUrl = 'http://localhost:8001/auth/login';
    const RedirectAfterLogin = '/test_context';

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [userContext, setUserContext] = useState(React.useContext(AppUserContext));

    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            let result = await axios.post(LoginUrl, {'email': email, 'password': password});
            setUserContext({
                'app': props.app,
                'access_token': result.access_token,
                'refresh_token': result.refresh_token,
                'context_address': result.context_address,
                'hash_identifier': result.hash_identifier
            });
            navigate(RedirectAfterLogin);
        } catch (err) {
            await Logging({'app': props.app, 'level': 1, 'message': err.response?.data?.message});
            setError(err.response?.data?.message || 'Login error');
        }
    };

    const onChangeEmail = (event) => {setEmail(event.target.value)};
    const onChangePassword = (event) => {setPassword(event.target.value)};

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
                        onChange={onChangeEmail}
                    />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={onChangePassword}
                    />
                </div>
                <button type="submit">LogIn</button>
            </form>
        </div>
    );
}

export default LogInForm;
