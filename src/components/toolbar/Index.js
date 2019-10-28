import React, {Component} from 'react';
import _ from './styles.module.css';
import bg from '../../gradient.module.css';
import {Button, ButtonGroup, Container} from "react-bootstrap";
import {ToolbarService} from "./ToolbarService";
import {CSSTransition, TransitionGroup} from "react-transition-group";
import EditForm from "../main/catalog/item/ItemContentWrapper";
import fadeTransition from "./animate.module.css";

import {faEdit, faHeart as farHeart, faTimesCircle} from '@fortawesome/free-regular-svg-icons';
import {faHeart, faPlus} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

function NavBar() {
    return <div className={_.catalogBar}>
        <div><FontAwesomeIcon icon={farHeart}/></div>
        <div><FontAwesomeIcon icon={faEdit}/></div>
        <div><FontAwesomeIcon icon={faPlus}/></div>
        <div><FontAwesomeIcon icon={faHeart}/></div>
        <div><FontAwesomeIcon icon={faTimesCircle}/></div>
    </div>;
}

class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nowView: <NavBar/>,
            trigger: true,
        };
    }

    componentDidMount() {
        this.subCatalogService = ToolbarService.getView().subscribe(v => {
            this.setState({nowView: v ? v : NavBar});
            this.setState({trigger: !this.state.trigger});
        });
        ToolbarService.setView(this.state.nowView);
    }

    componentWillUnmount() {
        this.subCatalogService.unsubscribe();
    }


    render() {
        const {trigger} = this.state;
        return (
            <TransitionGroup>
                <CSSTransition
                    timeout={500}
                    classNames={fadeTransition}
                    key={trigger}
                >
                    <BackgroundImage nowView={this.state.nowView}/>
                </CSSTransition>
            </TransitionGroup>

        );
    }
}

export default Index;

class BackgroundImage extends React.Component {
    render() {
        return <div className={_.toolbar}>
            <div className={`${_.contentWrapper} ${bg.friday} shadow`}>
                {this.props.nowView}
            </div>
        </div>;
    }
}
