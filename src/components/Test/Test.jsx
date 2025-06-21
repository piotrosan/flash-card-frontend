import React, { useState } from 'react';

import {AppUserContext} from "../../settings";

function Test(props) {

    const [userContext, setUserContext] = useState(React.useContext(AppUserContext));

    return (
        <div className="test">
            <p>{{userContext}}</p>
        </div>
    );
}

export default Test;
