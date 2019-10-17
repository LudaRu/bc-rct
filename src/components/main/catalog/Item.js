import React, {Component} from 'react';
import {Col, Form, Image, InputGroup} from "react-bootstrap";
// import { AnimateOnChange } from 'react-animation'
import posed, {PoseGroup} from 'react-pose';

import './style.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEdit, faHeart as farHeart, faTimesCircle} from '@fortawesome/free-regular-svg-icons';
import {faHeart, faCheckCircle, faTrashAlt} from '@fortawesome/free-solid-svg-icons';
import {easing} from "popmotion";
import Input from "../../../form/Input";
import FormExample from "../../test/FormExample";
import {Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller} from 'react-scroll';


// const Box = posed.div({
//     pressable: true,
//     init: { scale: 1},
//     press: {scale: 1.2},
//     pressEnd: {
//         color: "#f00",
//         scale: 1,
//         transition: {
//             color: {
//                 type: "keyframes",
//                 values: ["#f00", "#00f", "#f00"],
//                 loop: Infinity,
//                 ease: easing.easeInOut,
//                 duration: 3000
//             },
//             scale: {
//                 type: "keyframes",
//                 values: [1.9, 4, 2, 1, 0.5],
//                 loop: Infinity,
//                 ease: easing.easeInOut,
//                 duration: 3000
//             }
//         }
//     },
// });

const Box = posed.div({
    pressable: true,
    init: {scale: 1},
    press: {scale: 1.4},
    pressEnd: {
        scale: 1,
        transition: {
            type: 'spring',
            stiffness: 100
        }
    },
});

const Box2 = posed.div({
    edit: {
        applyAtEnd: { display: 'none' },
        opacity: 0,
        height: 0,
        transition: {
            type: 'tween',
            duration: 350,
        }

    },
    view: {
        applyAtStart: { display: 'flex' },
        opacity: 1,
        height: "auto",
        transition: {
            type: 'tween',
            duration: 400,
        }

    },
});

const scrollTo = (name) => {
    scroller.scrollTo(name, {
        duration: 800,
        delay: 0,
        smooth: 'easeInOutQuart'
    });
};

const Editorn = posed.div({
    edit: {
        applyAtStart: { display: 'block' },
        opacity: 1,
        height: "auto",
        transition: {
            type: 'tween',
            duration: 400,
            ease: "circOut",
        }

    },
    view: {
        applyAtEnd: { display: 'none'},
        opacity: 0,
        height: 0,
        transition: {
            type: 'tween',
            duration: 350,
            ease: "circOut",
        }
    },
});

const BoxItem = posed.div({
    blob: {},
    none: {},
});

class Item extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLike: props.item.isLike,
            mode: 'view',
            isBlob: false,
        };

        this.toggleLike = this.toggleLike.bind(this);
        this.toggleMode = this.toggleMode.bind(this);
        this.toggleBlob = this.toggleBlob.bind(this);
        this.renderToolbar = this.renderToolbar.bind(this);
    }

    toggleBlob() {
        this.setState({isBlob: !this.state.isBlob});
    }

    toggleLike() {
        this.setState({isLike: !this.state.isLike});
    }

    toggleMode() {
        scroller.scrollTo(this.props.index, {
            duration: 400,
            delay: 0,
            smooth: 'easeOutCirc',
            offset: -15,
        });
        this.setState({mode: (this.state.mode === 'view') ? 'edit' : 'view'});
    }

    render() {
        // pose={this.state.isBlob ? 'blob' : 'none'}
        const {match} = this.props;

        return <Element name={this.props.index} className="bg-white rounded item shadow-sm mb-3">

                <div className="d-flex">
                    <div onClick={this.toggleMode} className="item-img rounded overflow-hidden">
                        <Image fluid src={this.props.item.imgUrl}/>
                    </div>
                    <div onClick={this.toggleMode} className="item-content">
                        <div className="h-100 d-flex justify-content-between ">
                            <div className="d-flex flex-column pt-2 pb-2 pl-2 w-100">
                                <div className="title">{this.props.item.title}</div>
                                <Box2 pose={this.state.mode} className="d-flex justify-content-between footer">
                                    <small className="text-primary ">{this.props.item.tags}</small>
                                </Box2>
                            </div>
                        </div>
                    </div>
                    <div className="item-toolbar d-flex justify-content-between flex-column p-2">
                        <Box onClick={this.toggleLike}>
                            <FontAwesomeIcon className={'cursor f16 ' + (this.state.isLike ? 'text-danger' : '')}
                                             icon={this.state.isLike ? faHeart : farHeart}/>
                        </Box>
                    </div>
                </div>

                <Editorn onMouseDown={this.toggleMode} pose={this.state.mode}>
                    <div className="p-3"><FormExample/></div>
                </Editorn>

        </Element>;
    }

    renderToolbar() { // fixme css
        const view = <>
            <FontAwesomeIcon onClick={this.toggleMode} className="cursor" icon={faEdit}/>

            <Box onClick={this.toggleLike}>
                <FontAwesomeIcon
                    className={'cursor ' + (this.state.isLike ? 'text-danger' : '')}
                    icon={this.state.isLike ? faHeart : farHeart}/>
            </Box>

        </>;

        const edit = <>
            <FontAwesomeIcon onClick={this.toggleMode} className="cursor" icon={faTimesCircle}/>
            <FontAwesomeIcon className="cursor" icon={faTrashAlt}/>
            <FontAwesomeIcon className="cursor" icon={faCheckCircle}/>
        </>;

        return this.state.mode === 'view' ? view : edit;
    }
}

export default Item;
