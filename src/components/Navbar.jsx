import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import {Box, Flex, For, Grid, GridItem, Link, NativeSelect} from "@chakra-ui/react";

function Navbar(props) {
    const [selectValue, setSelectValue] = useState(null);

    let navigate = useNavigate();

    const onDashboard = (event) => {
        navigate('/dashboard');
    };

    const onChangeApp = (event) => {
        navigate(event.currentTarget.value);
    }

    return (
        <Flex justify="center" h="10vh">
            <Flex align="center" justify="center" direction="column" w="10%">
                <Link variant="underline" onClick={onDashboard} href="#">
                    Dashboard
                </Link>
            </Flex>
            <Flex align="center" justify="center" direction="column" w="5%">APPS:</Flex>
            <Flex align="center" justify="center" direction="column" w="30%">
                <NativeSelect.Root>
                    <NativeSelect.Field
                        value={selectValue}
                        onChange={onChangeApp}
                        placeholder={selectValue}
                    >
                        <option value='/test-knowledge'>Test Knowledge</option>
                        <option value='/flash-card'>Flash card</option>
                    </NativeSelect.Field>
                    <NativeSelect.Indicator />
                </NativeSelect.Root>
            </Flex>
        </Flex>
    );
}

export default Navbar;
