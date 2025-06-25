import React, {useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import {Checkbox, Button, Field, Flex, For, Fieldset, Input, Stack, Textarea, CheckboxGroup} from "@chakra-ui/react"
import Logging from "../helpers/logs/Logging";
import {renderHook} from "@testing-library/react";

function RegisterForm(props) {

    const RegisterUrl = 'http://localhost:8001/auth/register';
    const ConfigurationUrl = 'http://localhost:8001/config';
    const RedirectAfterLogin = '/dashboard';

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [ageRange, setAgeRange] = useState('');
    const [additionalInfo, setAdditionalInfo] = useState('');
    const [externalLogin, setExternalLogin] = useState('');
    const [apps, setApps] = useState([]);
    const [checkboxGroup, setCheckboxGroup] = useState('');
    const [errResult, setErrResult] = useState('');

    const navigate = useNavigate();


    const renderCheckGroup = (apps) => {
        return renderHook(<CheckboxGroup
            invalid={false}
            value={apps}
            onValueChange={onChangeApps}
            name="apps"
        >
            apps.map( (app) => {
                    <Checkbox.Root
                        size={"md"}
                        key={"md"}
                    >
                        <Checkbox.HiddenInput/>
                        <Checkbox.Control/>
                        <Checkbox.Label>app</Checkbox.Label>
                    </Checkbox.Root>
                }
            )
        </CheckboxGroup>)
    }

    useEffect(() => {
        try {
            axios.get(
                ConfigurationUrl
            ).then(
                (result) => {
                    setCheckboxGroup(renderCheckGroup(result.data.apps))
                    setErrResult(result.data);
                    console.log(checkboxGroup);
                });
        } catch (err) {
            Logging({'app': props.app, 'level': 1, 'message': errResult.message}).then(()=> {});
        }
        console.log(checkboxGroup);
    }, []);

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            axios.post(
                RegisterUrl,
                {
                    'user': {
                        'email': email,
                        'password': password,
                        'age_range': ageRange,
                        'additional_info': additionalInfo
                    },
                    'external_login': externalLogin,
                    'apps': apps
                }).then(
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
    const onChangeAgeRange = (event) => {setAgeRange(event.target.value)};
    const onChangeAdditionalInfo = (event) => {setAdditionalInfo(event.target.value)};
    const onChangeExternalLogin = (event) => {setExternalLogin(event.target.value)};
    const onChangeApps = (event) => {setApps(event.target.value); console.log(apps);};

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

                        <Field.Root>
                            <Field.Label>Age Range</Field.Label>
                            <Input value={ageRange} onChange={onChangeAgeRange} />
                            <Field.ErrorText>{errResult.err?.password}</Field.ErrorText>
                        </Field.Root>

                        <Field.Root>
                            <Field.Label>Additional Info</Field.Label>
                            <Input value={additionalInfo} onChange={onChangeAdditionalInfo} />
                            <Field.ErrorText>{errResult.err?.password}</Field.ErrorText>
                        </Field.Root>

                        <Field.Root>
                            <Field.Label>External Login</Field.Label>
                            <Textarea
                                value={password}
                                onChange={onChangeExternalLogin}
                                placeholder='For example,  string like json => {"client_id": "", "response_type": "", "client_secret": "", "grant_type": ""}' />
                            <Field.HelperText>Max 500 characters.</Field.HelperText>
                            <Field.ErrorText>{errResult.err?.password}</Field.ErrorText>
                        </Field.Root>

                        <Field.Root>
                            <Field.Label>Select your framework</Field.Label>
                            {/*{{ checkboxGroup }}*/}
                            <Field.ErrorText>{errResult.err?.password}</Field.ErrorText>
                        </Field.Root>

                        <Button type="submit">Submit</Button>
                    </Stack>
                </form>
            </Flex>
        </Flex>
    );
}

export default RegisterForm;
