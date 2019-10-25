import Catalog from "./components/main/catalog/Catalog";
import {Route} from 'react-router-dom';
import React from "react";
import {Switch, Router} from "react-router-dom";
import Home from "./components/main/Home";
import NotFaund from "./components/NotFaund";
import Header from "./components/header";
import Cardx from "./components/test/Cardx";
import SignUp from "./components/test/SignUp";
import FormExample from "./components/test/FormExample";
import Formtest from "./components/test/Formtest";
import Tags from "./components/test/Tags";
import Toolbar from "./components/main/catalog/toolbar/Index";

const Routers = () => (
    <React.Fragment>
        <Switch>
            <Route exact path='/' component={Tags}/>
            <Route exact path='/form2' component={FormExample}/>
            <Route exact path='/f' component={Formtest}/>
            <Route exact path='/card' component={Cardx}/>
            <Route path='/catalog'>
                <Route exact path='/catalog' component={Catalog}/>
                {/*<Route path='/catalog/:topicId' component={Item}/>*/}
            </Route>
            <Route exact path='*' component={NotFaund}/>
        </Switch>
        <Toolbar/>
     </React.Fragment>
);

export default Routers;
