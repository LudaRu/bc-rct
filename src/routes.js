import Catalog from "./components/main/catalog/Catalog";
import {Route} from 'react-router-dom';
import React from "react";
import {Switch, Router} from "react-router-dom";
import Home from "./components/main/Home";
import Header from "./components/header";
import Cardx from "./components/test/Cardx";
import SignUp from "./components/test/SignUp";
import FormExample from "./components/test/FormExample";
import Formtest from "./components/test/Formtest";
import Tags from "./components/test/Tags";
import Toolbar from "./components/toolbar/Index";

const Routers = () => (
    <React.Fragment>
        <Switch>
            <Route exact path='/' component={Catalog}/>
            <Route exact path='/form2' component={FormExample}/>
            <Route exact path='/f' component={Formtest}/>
            <Route exact path='/card' component={Cardx}/>
            <Route path='/catalog'>
                <Route exact path='/catalog' component={Catalog}/>
                {/*<Route path='/catalog/:topicId' component={Item}/>*/}
            </Route>
        </Switch>
     </React.Fragment>
);

export default Routers;
