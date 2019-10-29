import React, {Component} from 'react';
import Inputs from "../../../test/Inputs";
import './style.css';
import {CSSTransition, TransitionGroup} from "react-transition-group";
import FormExample from "../../../test/FormExample";
import {Button, ButtonGroup} from "react-bootstrap";
import FormEdit from "./FormEdit";
import Tags from "../../../test/Tags";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEdit, faTimesCircle} from "@fortawesome/free-regular-svg-icons";
import {ToolbarService} from "../../../toolbar/ToolbarService";
import FormView from "./FormView";


class ContentMore extends Component {
    constructor(props) {
        super(props);
        this.setEditMode = this.setEditMode.bind(this)
    }

    setEditMode() {
        ToolbarService.setView('');
        this.props.setEditMode();
    }

    render() {
        return (
            <div className="">
                <TransitionGroup>
                    <CSSTransition
                        timeout={0}
                        classNames="page"
                        key={this.props.isEdit}
                    >
                        <div className="wrapper p-2">
                            <Wrapper
                                item={this.props.item}
                                isEdit={this.props.isEdit}
                                setEditMode={this.props.setEditMode}
                                setViewMode={this.props.setViewMode}
                            />
                        </div>
                    </CSSTransition>
                </TransitionGroup>
            </div>
        );
    }
}

export default ContentMore;

const Wrapper = ({item, isEdit, setEditMode, setViewMode}) => (
    <>{isEdit ?
        <FormEdit
            item={item}
            isEdit={isEdit}
            setEditMode={setEditMode}
            setViewMode={setViewMode}
        />
        : <FormView
            item={item}
            isEdit={isEdit}
            setEditMode={setEditMode}
            setViewMode={setViewMode}
        />
    }</>
);
