import React from 'react';
import Routers from "./routes";
import Container from "react-bootstrap/Container";
import Toolbar from "./components/toolbar/Index";

const App = () => {
    return <>
        <Routers/>
        <Toolbar/>
    </>;
};

export default App;
