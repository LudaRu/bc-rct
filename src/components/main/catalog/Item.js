import React, {Component} from 'react';
import {Col, Form, Image, InputGroup} from "react-bootstrap";


import './style.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEdit, faHeart as farHeart, faTimesCircle} from '@fortawesome/free-regular-svg-icons';
import {faHeart, faCheckCircle, faTrashAlt} from '@fortawesome/free-solid-svg-icons';
import {Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller} from 'react-scroll';
import {CSSTransition} from "react-transition-group";
import Inputs from "../../test/Inputs";
import ReactDOM from 'react-dom';
import ItemView from "./item/ItemView";


class Item extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLike: props.item.isLike,
            isOpen: false,
            isBlob: false,
        };
        this.toggleLike = this.toggleLike.bind(this);
        this.toggleMode = this.toggleMode.bind(this);
        this.handleScroll = this.handleScroll.bind(this);

        this.rect = null;
    }


    componentDidMount() {
        // this.rect = ReactDOM.findDOMNode(this);
        // window.addEventListener('scroll', this.handleScroll);
    };

    componentWillUnmount() {
        // window.removeEventListener('scroll', this.handleScroll);
    };

    handleScroll() {
        // console.log(this.rect.getBoundingClientRect())
        // const bottom =  window.pageYOffset+window.innerHeight;
        // window.pageYOffset;
        // console.log();
    }

    toggleLike() {
        this.setState({isLike: !this.state.isLike});
    }

    toggleMode(flag) {
        console.log(123);
        scroller.scrollTo(this.props.index, {
            duration: 400,
            delay: 0,
            smooth: 'easeOutCirc',
            offset: -15,
        });
        this.setState(this.setState({isOpen: flag}));
    }

    render() {
        // pose={this.state.isBlob ? 'blob' : 'none'}
        const {match} = this.props;
        const {isOpen} = this.state;

        return <Element  name={this.props.index} className="bg-white rounded item shadow-sm mb-3">
            <CSSTransition
                in={isOpen}
                timeout={0}
                classNames="modeview"
                appear
            >
                <div>
                    <div className="d-flex">
                        <div onClick={() => {
                            this.toggleMode(!this.state.isOpen);
                        }} className="wimg item-img rounded overflow-hidden">
                            <span style={{backgroundImage: `url(${this.props.item.imgUrl})`}} className="ttex"></span>
                            <img className="rounded" src={this.props.item.imgUrl}/>
                        </div>

                        <div className="wcontent w-100 d-flex">
                            <div className="item-content">
                                <div className="h-100  justify-content-between ">
                                    <div className="h-100 d-flex flex-column pt-2 pb-2 pl-2 w-100">
                                        <div className="title">{this.props.item.title}</div>
                                        <div className="d-flex justify-content-between footer">
                                            <small className="text-primary ">{this.props.item.tags}</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="item-toolbar  justify-content-between flex-column p-2">
                                <div>
                                <FontAwesomeIcon onClick={this.toggleLike}
                                                 className={'like f16 ' + (this.state.isLike ? 'text-danger' : '')}
                                                 icon={this.state.isLike ? faHeart : farHeart}/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <CSSTransition
                        in={isOpen}
                        timeout={500}
                        classNames="weditoranim"
                        unmountOnExit
                    >
                        <div className="weditor">
                            <ItemView/>
                        </div>
                    </CSSTransition>
                </div>
            </CSSTransition>

        </Element>;
    }
}

export default Item;
