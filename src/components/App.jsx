import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LogInForm from "./Log_In_Out/LogIn";
import ProtectedRoute from "./Log_In_Out/ProtectedRoute";
import Test from "./Test/Test";


function App() {
    const [appContext, setAppContext] = React.useState(null);


    return (
        <Router>
            <Routes>
                <Route path="/" element={<LogInForm setAppContext={setAppContext}/>} />
                    <Route path="/test_context" element={
                        <ProtectedRoute appContext={appContext}>
                            <Test appContext={appContext}/>
                        </ProtectedRoute>
                    }/>
                    <Route path="/" element={
                        <ProtectedRoute appContext={appContext}>
                            <Test appContext={appContext}/>
                        </ProtectedRoute>
                    }/>
                    <Route path="/" element={
                        <ProtectedRoute appContext={appContext}>
                            <Test appContext={appContext}/>
                        </ProtectedRoute>
                    }/>
            </Routes>
        </Router>
    );
}

export default App;
