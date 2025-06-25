import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LogInForm from "../pages/LogInOut/LogIn";
import ProtectedRoute from "./ProtectedRoute";
import Test from "../components/Test/Test";
import TestKnowledge from "../pages/TestKnowledge";
import Dashboard from "../pages/Dashboard";
import Navbar from "../components/Navbar";


function App() {
    const [appContext, setAppUserContext] = React.useState(null);

    return (
        <Router>
            { appContext != null  ? <Navbar /> : <></> }
            <Routes>
                {/* Test  */}
                <Route path="/test" element={<Test/>}/>
                <Route path="/test-context" element={
                    <ProtectedRoute appContext={appContext}>
                        <Test appContext={appContext}/>
                    </ProtectedRoute>
                }/>
                {/* Sites */}
                <Route path="/" element={<LogInForm setAppUserContext={setAppUserContext}/>} />
                <Route path="/dashboard" element={
                    <ProtectedRoute appContext={appContext}>
                        <Dashboard appContext={appContext}/>
                    </ProtectedRoute>
                }/>
                {/* Apps */}
                <Route path="/test-knowledge" element={
                    <ProtectedRoute appContext={appContext}>
                        <TestKnowledge appContext={appContext}/>
                    </ProtectedRoute>
                }/>
            </Routes>
        </Router>
    );
}

export default App;
