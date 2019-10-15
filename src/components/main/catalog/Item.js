import React, {Component} from 'react';
import {Image} from "react-bootstrap";
import { AnimateOnChange } from 'react-animation'

import './style.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEdit, faHeart as farHeart, faTimesCircle} from '@fortawesome/free-regular-svg-icons'
import {faHeart, faCheckCircle, faTrashAlt} from '@fortawesome/free-solid-svg-icons'

class Item extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLike: props.item.isLike,
            mode: 'view',
        };

        this.toggleLike = this.toggleLike.bind(this);
        this.toggleMode = this.toggleMode.bind(this);
        this.renderImage = this.renderImage.bind(this);
        this.renderTitle = this.renderTitle.bind(this);
        this.renderTags = this.renderTags.bind(this);


        this.renderToolbar = this.renderToolbar.bind(this);
    }

    toggleLike() {
        this.setState({isLike: !this.state.isLike});
    }

    toggleMode() {
        this.setState({mode: (this.state.mode === 'view') ? 'edit' : 'view'});
    }

    render() {
        return <div className="bg-light item">
            <div className="item-img rounded overflow-hidden">
                { this.renderImage() }
            </div>
            <div className="item-content">
                <div className="h-100 d-flex justify-content-between ">
                        <div className="d-flex flex-column pt-2 pb-2 pl-2 w-100">
                            <div className="title">{ this.renderTitle() }</div>
                            <div className="d-flex justify-content-between footer">
                                {this.renderTags()}
                            </div>
                        </div>
                        <div className="item-toolbar d-flex justify-content-between flex-column p-2">
                            {this.renderToolbar()}
                        </div>

                </div>
            </div>
        </div>;
    }

    renderImage() {
        return (this.state.mode === 'view')
            ? <Image fluid src={this.props.item.imgUrl}/> : <input className="w-100" type={`text`}/>;
    }

    renderTitle() {
        return (this.state.mode === 'view')
            ? this.props.item.title : <input className="w-100" type={`text`}/>;
    }

    renderTags() {
        return (this.state.mode === 'view')
            ? <small className="text-primary ">{this.props.item.tags}</small> : <input className="w-100" type={`text`}/>;
    }

    renderToolbar() { // fixme css
        const view = <>
            <FontAwesomeIcon onClick={ this.toggleMode } className="cursor" icon={faEdit}/>
            <AnimateOnChange animationIn="bounceIn" animationOut="bounceOut" durationOut={100}>
                <FontAwesomeIcon
                onClick={ this.toggleLike }
                className={'cursor ' + (this.state.isLike ? 'text-danger' : '')}
                icon={ this.state.isLike ? faHeart : farHeart }/></AnimateOnChange>

        </>;

        const edit = <>
            <FontAwesomeIcon onClick={ this.toggleMode } className="cursor" icon={faTimesCircle}/>
            <FontAwesomeIcon className={'cursor'} icon={faTrashAlt}/>
            <FontAwesomeIcon className={'cursor'} icon={faCheckCircle}/>
        </>;

        return this.state.mode === 'view' ? view : edit
    }
}

export default Item;
