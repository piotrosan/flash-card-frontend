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
        if (event.currentTarget.value !== ''){
            navigate(event.currentTarget.value);
        }

    }

    return (
        <Flex
            bgImage="linear-gradient({#C5A980}, {#FAEDDD})"
            className="menu"
            align="center"
            justify="center"
            h="10vh"
            borderWidth="2px"
        >
            <Flex
                borderWidth="1px"
                rounded="md"
                borderRadius="md"
                align="center"
                justify="center"
                direction="column"
                w="10%"
                h="50%"
                style={{marginRight: "5%"}}
            >
                <Link style={{color: "rgb(119 95 61)"}} variant="underline" onClick={onDashboard} href="#">
                    Dashboard
                </Link>
            </Flex>
            <Flex
                style={{color: "rgb(119 95 61)"}}
                align="center"
                justify="center"
                direction="column"
                w="5%"
            >APPS:</Flex>
            <Flex
                style={{color: "rgb(119 95 61)"}}
                align="center"
                justify="center"
                direction="column"
                w="30%"
            >
                <NativeSelect.Root>
                    <NativeSelect.Field
                        onChange={onChangeApp}
                        placeholder="select app ..."
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
