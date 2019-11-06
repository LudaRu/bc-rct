import React, {Component} from 'react';
import './style.css';
import {CSSTransition, TransitionGroup} from "react-transition-group";
import FormEdit from "./FormEdit";
import FormView from "./FormView";
import {withItemContext} from "./Index";


class ContentMore extends Component {
    constructor(props) {
        super(props);
        this.setEditMode = this.setEditMode.bind(this)
    }

    setEditMode() {
        this.props.setEditMode();
    }

    render() {
        return (
            <div className="">
                <TransitionGroup>
                    <CSSTransition
                        timeout={0}
                        classNames="page"
                        key={this.props.context.isEdit}
                    >
                        <div className="wrapper p-2">
                            <Wrapper isEdit={this.props.context.isEdit}/>
                        </div>
                    </CSSTransition>
                </TransitionGroup>
            </div>
        );
    }
}

export default withItemContext(ContentMore);

const Wrapper = ({isEdit}) => (
    <>{isEdit ? <FormEdit/> : <FormView/>}</>
);
