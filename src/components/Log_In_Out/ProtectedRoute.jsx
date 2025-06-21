import { Navigate } from "react-router-dom";
import React from "react";

import {AppUserContext} from "../../settings";

export const ProtectedRoute = ({ children }) => {

    const context = React.useContext(AppUserContext);

    if (
        context !== {} &&
        context.access_token === '' &&
        context.context_address === ''
    ) {
        return <Navigate to="/login" />;
    }
    return <Navigate to="/login" />;;
};