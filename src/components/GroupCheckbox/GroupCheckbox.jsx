import React, { useState } from 'react';
import {Checkbox, Box} from "@chakra-ui/react";

function GroupCheckbox(props) {
    const [item, setItem] = useState(props.checkboxGroup);

    return (
        <Box>
            {
                Object.entries(item).map( i => (
                    <Checkbox.Root
                        key={i.value}
                        value={i.value}
                        checked={!!i.value}
                        onCheckedChange={(e) => Object.assign(i, {[i.value]: !!e.checked})}
                    >
                        <Checkbox.HiddenInput />
                        <Checkbox.Control />
                        <Checkbox.Label>{item.value}</Checkbox.Label>
                    </Checkbox.Root>
                ))
            }
        </Box>
    );
}

export default GroupCheckbox;
