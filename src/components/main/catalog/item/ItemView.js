import React, {Component} from 'react';
import Inputs from "../../../test/Inputs";
import './style.css';
import {CSSTransition, TransitionGroup} from "react-transition-group";
import FormExample from "../../../test/FormExample";

class ItemView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modeEdit: false,
        };

    }

    componentDidMount() {
    };

    render() {
        const {modeEdit} = this.state;
        return (<div className="p-2">
            <div onClick={() => {
                this.setState({modeEdit: false});
            }}>1
            </div>
            <div onClick={() => {
                this.setState({modeEdit: true});
            }}>2
            </div>
            <TransitionGroup>
                <CSSTransition
                    timeout={0}
                    classNames="page"
                    key={modeEdit}
                >
                    <div className="wrapper">
                        <BackgroundImage item={this.props.item} modeEdit={modeEdit}/>
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
        return <><FormExample/></>;
    }

    render() {
        const Comp = this.props.modeEdit ? this.renderEdit.bind(this) : this.renderView.bind(this);

        return <div><Comp/></div>;
    }
}

export default ItemView;
