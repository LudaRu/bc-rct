import React, {Component} from 'react';
import Inputs from "../../../test/Inputs";
import './style.css';
import {CSSTransition, TransitionGroup} from "react-transition-group";
import FormExample from "../../../test/FormExample";
import {Button, ButtonGroup} from "react-bootstrap";
import EditForm from "./EditForm";



class ItemContentWrapper extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
    };

    render() {
        const {isEdit} = this.props.state;
        const {toggleEdit} = this.props;
        return (<div className="">
            <TransitionGroup>
                <CSSTransition
                    timeout={0}
                    classNames="page"
                    key={isEdit}
                >
                    <div className="wrapper p-2">
                        <BackgroundImage item={this.props.item} isEdit={isEdit}/>
                    </div>
                </CSSTransition>
            </TransitionGroup>
        </div>);
    }
}


class BackgroundImage extends React.Component {
    renderView() {
        return <>
            <p>Описание</p>
            <p>{this.props.item.id}</p>
            <p>{this.props.item.title}</p>
            <p>{this.props.item.imgUrl}</p>
            <p>{this.props.item.tags}</p>
            <p>{this.props.item.createTime}</p>
        </>;
    }

    renderEdit() {
        return <EditForm item={this.props.item}/>;
    }

    render() {
        const Comp = this.props.isEdit ? this.renderEdit.bind(this) : this.renderEdit.bind(this);

        return <Comp/>;
    }
}

export default ItemContentWrapper;
