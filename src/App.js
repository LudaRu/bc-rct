import React from 'react';
import Routers from "./routes";
import Container from "react-bootstrap/Container";
import Toolbar from "./components/toolbar/Index";

const App = () => {
    return <>
        <Container className="mb-5"><Routers/></Container>
        <Toolbar/>
    </>;
};

export default App;
