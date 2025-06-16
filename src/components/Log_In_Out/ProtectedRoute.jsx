import { Navigate } from "react-router-dom";
import React from "react";

export const ProtectedRoute = ({ children }) => {
    const { user } = useAuth();

    AppUserContext.appUser
    if (!user) {
        // user is not authenticated
        return <Navigate to="/login" />;
    }
    return children;
};