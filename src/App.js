import React, { useState } from 'react';
import axios from 'axios';
import './App.css';
import Logging from "./helpers/logs/Logging";

function App(props) {
    const AppSettings = React.createContext();
    const ConfigurationUrl = '';
    let configuration = {};

    try {
        configuration = axios.get(ConfigurationUrl);
    } catch (err) {
        Logging({'app': props.app, 'level': 1, 'message': err.response?.data?.message}).then()
    }


  return (
      <AppSettings.Provider value={{'configuration': configuration}}>

      </AppSettings.Provider>
  );
}

export default App;
