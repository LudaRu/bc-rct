import React from 'react';
import './style.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEdit, faHeart as farHeart, faTimesCircle} from '@fortawesome/free-regular-svg-icons';
import {faHeart, faCheckCircle, faTrashAlt} from '@fortawesome/free-solid-svg-icons';
import {Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller} from 'react-scroll';
import {CSSTransition} from "react-transition-group";
import ItemContentWrapper from "./ItemContentWrapper";
import {CatalogService} from "../CatalogService";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Button from "react-bootstrap/Button";
import {ToolbarContext} from "../../../test/ToolbarStore";
import {ToolbarService} from "../../../toolbar/ToolbarService";

class Item extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLike: props.item.isLike,
            isOpen: false,
            isEdit: false,
        };
        this.toggleLike = this.toggleLike.bind(this);
        this.togglOpen = this.togglOpen.bind(this);
        this.togglEdit = this.togglEdit.bind(this);
        this.renderImageWrapper = this.renderImageWrapper.bind(this);
        this.handleScroll = this.handleScroll.bind(this);
    }

    renderImageWrapper() {
        const edit = <div className="wimg item-img rounded overflow-hidden"  onClick={() => {this.togglOpen(!this.state.isOpen)}}>
            <img className="rounded imgUploader" src="https://avatars.mds.yandex.net/get-canvas/1637513/2a0000016d9637a6270531ff81d8f5b665bb/cropSource"/>
            <input className="fileinput" type="file" />
        </div>;

        const view = <div className="wimg item-img rounded overflow-hidden"  onClick={() => {this.togglOpen(!this.state.isOpen)}}>
            <span style={{backgroundImage: `url(${this.props.item.imgUrl})`}} className="ttex"></span>
            <img className="rounded" src={this.props.item.imgUrl}/>
        </div>;

        return <>{this.state.isEdit ? edit : view}</>
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
        const like = !this.state.isLike;
        CatalogService.toggleLike(this.props.item.id, like);
        this.setState({isLike: like});
    }

    togglOpen(flag) {
        scroller.scrollTo(this.props.item.id, {
            duration: 400,
            delay: 0,
            smooth: 'easeOutCirc',
            offset: -15,
        });
        this.setState(this.setState({isOpen: flag}));
        if (!flag) {
            ToolbarService.back();
            this.setState(this.setState({isEdit: flag}));
        } else {
            ToolbarService.setView(<ButtonGroup className="w-100">
                <Button variant="info"><FontAwesomeIcon icon={faEdit}/> Редактировать</Button>
                <Button onClick={() => {this.togglOpen(false)}} variant="secondary"><FontAwesomeIcon icon={faTimesCircle}/></Button>
            </ButtonGroup>);
        }
    }

    togglEdit(flag) {
        this.setState(this.setState({isEdit: flag}));
    }

    render() {
        const {isOpen} = this.state;

        return <Element name={this.props.item.id} className="bg-white rounded item shadow-sm mb-3">
            <CSSTransition in={isOpen}timeout={0} classNames="modeview">
                <div>
                    <div className="d-flex">
                        {this.renderImageWrapper()}
                        <div className="wcontent w-100 d-flex">
                            <div className="item-content"  onClick={() => {this.togglOpen(!this.state.isOpen)}}>
                                <div className="h-100  justify-content-between ">
                                    <div className="h-100 d-flex flex-column pt-2 pb-2 pl-2 w-100">
                                        <div className="title">{this.props.item.title}</div>
                                        <div className="d-flex justify-content-between footer">
                                            <small className="text-info">{this.props.item.tags.map(tag => '#'+tag+' ')}</small>
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
                    <CSSTransition in={isOpen} timeout={500} classNames="weditoranim" unmountOnExit>
                        <div className="weditor">
                            <ItemContentWrapper item={this.props.item} state={this.state} toggleEdit={this.togglEdit}/>
                        </div>
                    </CSSTransition>
                </div>
            </CSSTransition>

        </Element>;
    }
}

export default Item;
