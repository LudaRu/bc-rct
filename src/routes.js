import Catalog from "./components/main/catalog/Catalog";
import {Route, withRouter} from 'react-router-dom';
import React from "react";
import {Switch} from "react-router-dom";
import CSSTransition from "react-transition-group/esm/CSSTransition";
import TransitionGroup from "react-transition-group/esm/TransitionGroup";


const Routers = ({location}) => (
        <TransitionGroup>
            <CSSTransition
                key={location.key}
                timeout={{ enter: 150, exit: 150 }}
                classNames={'fade'}
            >
                <div className="route-section">
                    <Switch location={location}>
                        <Route exact path='/' component={Catalog}/>
                    </Switch>
                </div>
            </CSSTransition>
        </TransitionGroup>
);

export default withRouter(Routers);
