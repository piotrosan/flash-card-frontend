import React from 'react';
import ReactDOM from 'react-dom/client';
import {ChakraProvider, createSystem, defaultConfig, defineConfig} from "@chakra-ui/react"

import './index.css';
import reportWebVitals from './reportWebVitals';
import App from "./routing/App";

const root = ReactDOM.createRoot(document.getElementById('root'));

const system = createSystem();

root.render(
  <React.StrictMode>
      <ChakraProvider value={system}>
        <App />
      </ChakraProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();