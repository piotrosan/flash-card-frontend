import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './index.css';

import Home from './pages/Home';
import LogInForm from "./components/Log_In_Out/LogIn";

import reportWebVitals from './reportWebVitals';
import {ProtectedRoute} from "./components/Log_In_Out/ProtectedRoute";
import Test from "./components/Test/Test";


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
      <Router>
          <Routes>
              <Route path="/login" element={<LogInForm />} />
              <Route element={<ProtectedRoute />}>
                  <Route path="/" element={<Home />} />
                  <Route path="/test_context" element={<Test />} />
              </Route>
          </Routes>
      </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
