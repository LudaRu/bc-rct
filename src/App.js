import React from 'react';
import './App.css';
import { Link, Route, Switch }from "react-router-dom";
import Main from "./components/main";
import Header from "./components/header";
import Routers from "./routes";

const App = () => (
    <div>
        <Routers/>
    </div>
);

export default App;
