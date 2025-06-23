import { Navigate } from "react-router-dom";
import React from "react";

export const ProtectedRoute = ({ children, appContext }) => {
    if (
        appContext === {} &&
        appContext.access_token === '' &&
        appContext.context_address === ''
    ) {
        return <Navigate to="/login" />;
    }
    console.log(children);
    return children;
};

export default ProtectedRoute;