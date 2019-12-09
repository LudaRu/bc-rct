import React from 'react';
import './style.css';
import _ from './styles.module.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHeart as farHeart} from '@fortawesome/free-regular-svg-icons';
import {faHeart, faTimes, faCircle} from '@fortawesome/free-solid-svg-icons';
import {CSSTransition} from "react-transition-group";
import ContentMore from "./ContentMore";
import {ToolbarService} from "../../../toolbar/ToolbarService";
import {withCatalogContext} from "../Catalog";

const ItemContext = React.createContext();

export function withItemContext(Component) {
    return function WrapperComponent(props) {
        return (
            <ItemContext.Consumer>
                {state => <Component {...props} context={state}/>}
            </ItemContext.Consumer>
        );
    };
}

class Index extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            item: props.item,
            isLike: props.item.isLike,
            isOpen: false,
            isEdit: false,
        };

        this.toggleLike = this.toggleLike.bind(this);

        this.openItem = this.openItem.bind(this);
        this.closeItem = this.closeItem.bind(this);

        this.renderContentPreview = this.renderContentPreview.bind(this);
    }

    toggleLike() {
        this.setState({isLike: !this.state.isLike});
    }

    openItem() {
        if (this.props.context.hasOpenItem) {
            return false;
        }
        this.props.context.setHasOpenItem(true);
        this.setState({isOpen: true});
        ToolbarService.setView(
            <span className="fa-stack fa-2x" onClick={this.closeItem}>
                <FontAwesomeIcon icon={faCircle} className={`fa-stack-2x text-danger`} />
                <FontAwesomeIcon icon={faTimes} className={`fa-stack-1x fa-inverse`}/>
            </span>);
    }

    closeItem() {
        this.props.context.setHasOpenItem(false);
        this.setState({isOpen: false});
        ToolbarService.reset();
    }

    render() {
        const {isOpen} = this.state;

        return <div className={`${_.item} bg-white rounded shadow-sm mb-3`}>
            <CSSTransition in={isOpen} timeout={0} classNames="modeview">
                    <ItemContext.Provider value={this.state}>
                        <div className="d-flex">
                            <div className={`${_.itemImg} wimg rounded overflow-hidden`} onClick={() => {this.openItem()}}>
                                <span style={{backgroundImage: `url(${this.props.item.imgUrl})`}} className={_.blurBg}></span>
                                <img className="rounded" src={this.props.item.imgUrl}/>
                            </div>
                            <div className={`wcontent w-100 d-flex`}>
                                {this.renderContentPreview()}
                            </div>
                        </div>
                        <CSSTransition in={isOpen} timeout={500} classNames="weditoranim" unmountOnExit>
                            <div className="weditor">
                                <ContentMore/>
                            </div>
                        </CSSTransition>
                    </ItemContext.Provider>
            </CSSTransition>
        </div>;
    }


    renderContentPreview() {
        return <>
            <div className={_.itemContent} onClick={this.openItem}>
                <div className={`h-100 justify-content-between`}>
                    <div className={`h-100 d-flex flex-column pt-2 pb-2 pl-2 w-100`}>
                        <div className={_.title}>{this.props.item.title}</div>
                        <div className={` ${_.footer} d-flex justify-content-between`}>
                            <small className={`text-info`}>{this.props.item.tags.map(tag => '#' + tag + ' ')}</small>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`item-toolbar justify-content-between flex-column p-2`}>
                <div>
                    <FontAwesomeIcon
                        onClick={this.toggleLike}
                        className={`${_.like} ${(this.state.isLike ? 'text-danger' : '')}`}
                        icon={this.state.isLike ? faHeart : farHeart}
                    />
                </div>
            </div>
        </>;
    }
}

export default withCatalogContext(Index);
