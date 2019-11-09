import React, {Component} from 'react';
import Index from "./item/Index";
import Masonry from 'react-masonry-css';
import {CatalogService} from "./CatalogService";
import Routers from "../../../App";
import Container from "react-bootstrap/Container";
import Modal from "./modal/Modal";
import {Route, Link} from "react-router-dom";
import {CSSTransition} from "react-transition-group";



const CatalogContext = React.createContext();

export function withCatalogContext(Component) {
    return function WrapperComponent(props) {
        return (
            <CatalogContext.Consumer>
                {state => <Component {...props} context={state} />}
            </CatalogContext.Consumer>
        );
    };
}


class Catalog extends Component {

    constructor(props) {
        super(props);

        this.state = {
            items: [],
            changeItemId: false,
            setChangeItemId: (v) => {this.setState({changeItemId: v})},
        };
    }

    componentDidMount() {
        this.subCatalogService = CatalogService.getItems$().subscribe( v => {
            if (v) {
                this.setState({ items: v});
            }
        });
    }

    componentWillUnmount() {
        this.subCatalogService.unsubscribe();
    }

    render() {
        const {match} = this.props;
        return (
            <Container className="mb-5">
                <CatalogContext.Provider value={this.state}>
                    <CSSTransition
                        in={!!this.state.changeItemId}
                        timeout={300}
                        classNames="my-node"
                        unmountOnExit
                    >
                        <Modal/>
                    </CSSTransition>

                    <Masonry
                        breakpointCols={{default: 3, 992: 2, 768: 1,}}
                        className="my-masonry-grid"
                        columnClassName="my-masonry-grid_column">
                        {this.state.items.map((item) => <Index key={item.id} item={item}/>)}
                    </Masonry>
                </CatalogContext.Provider>
            </Container>
        );
    }
}

export default Catalog;
