import React, {Component} from 'react';
import _ from './styles.module.css';
import bg from '../../gradient.module.css';
import {Button, ButtonGroup, Container} from "react-bootstrap";
import {ToolbarService} from "./ToolbarService";
import {CSSTransition, TransitionGroup} from "react-transition-group";
import EditForm from "../main/catalog/item/ContentMore";
import fadeTransition from "./animate.module.css";

import {faEdit, faHeart as farHeart, faTimesCircle} from '@fortawesome/free-regular-svg-icons';
import {faHeart, faPlus, faHome} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Link} from "react-router-dom";


const BarNavigate = () => (
    <div className={_.catalogBar}>
        <div><Link to='/'><FontAwesomeIcon icon={faHome}/></Link></div>
        <div><Link to='/like'><FontAwesomeIcon icon={faHeart}/></Link></div>
        <div><Link to='/create'><FontAwesomeIcon icon={faPlus}/></Link></div>
        <div><FontAwesomeIcon icon={faHeart}/></div>
        <div><FontAwesomeIcon icon={faTimesCircle}/></div>
    </div>
);

class Index extends Component {
    constructor(props) {
        super(props);
        this.defaultBar = <BarNavigate/>
        this.state = {
            nowView: this.defaultBar,
            trigger: true,
        };
    }

    componentDidMount() {
        this.subCatalogService = ToolbarService.getView().subscribe(v => {
            this.setState({nowView: v === null ? this.defaultBar : v});
            this.setState({trigger: !this.state.trigger});
        });
        ToolbarService.setView(this.state.nowView);
    }

    componentWillUnmount() {
        this.subCatalogService.unsubscribe();
    }

    render() {
        const {trigger} = this.state;
        return (<TransitionGroup>
            <CSSTransition
                timeout={500}
                classNames={fadeTransition}
                key={trigger}
            >
                <Wrapper nowView={this.state.nowView}/>
            </CSSTransition>
        </TransitionGroup>);
    }
}

export default Index;



const Wrapper = ({nowView}) => (
    <div className={_.toolbar}>
        <div className={`${_.contentWrapper} ${bg.friday} shadow`}>
            {nowView}
        </div>
    </div>
);
