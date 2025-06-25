import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import {Box, Button, Field, Flex, Grid, Input, Stack} from "@chakra-ui/react"


import Logging from "../../helpers/logs/Logging";

function LogInForm(props) {

    const LoginUrl = 'http://localhost:8001/auth/login';
    const RedirectAfterLogin = '/dashboard';

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errResult, setErrResult] = useState('');

    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            axios.post(
                LoginUrl,
                {'email': email, 'password': password}).then(
                    (result) => {
                        props.setAppUserContext({
                            'access_token': result.data.access_token,
                            'refresh_token': result.data.refresh_token,
                            'context_address': result.data.context_address,
                            'hash_identifier': result.data.hash_identifier
                        });
                        setErrResult(result.data);
                    });

        } catch (err) {
            await Logging({'app': props.app, 'level': 1, 'message': errResult.message});
        }
        navigate(RedirectAfterLogin);
    };

    const onChangeEmail = (event) => {setEmail(event.target.value)};
    const onChangePassword = (event) => {setPassword(event.target.value)};

    return (
        <Flex align="center" h="100vh" justify="center">
            <Flex w="50%" h="50%">
                <form style={{width: "100%"}} onSubmit={handleSubmit}>
                    <Stack  align="flex-start" maxW="md">
                        <Field.Root>
                            <Field.Label>Email</Field.Label>
                            <Input value={email} onChange={onChangeEmail}/>
                            <Field.ErrorText>{errResult.err?.email}</Field.ErrorText>
                        </Field.Root>

                        <Field.Root>
                            <Field.Label>Password</Field.Label>
                            <Input value={password} onChange={onChangePassword} />
                            <Field.ErrorText>{errResult.err?.password}</Field.ErrorText>
                        </Field.Root>
                        <Button type="submit">Submit</Button>
                    </Stack>
                </form>
            </Flex>
        </Flex>
    );
}

export default LogInForm;
