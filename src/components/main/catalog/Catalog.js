import React, {Component} from 'react';
import Index from "./item/Index";
import Masonry from 'react-masonry-css';
import {CatalogService} from "./CatalogService";
import Routers from "../../../App";
import Container from "react-bootstrap/Container";
import Modal from "./modal/Modal";



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
            modalShow: false,
            setModalShow: (v) => {this.setState({modalShow: v})},
            hasOpenItem: false,
            setHasOpenItem: (v) => {this.setState({hasOpenItem: v})},
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
                    <Masonry
                        breakpointCols={{default: 3, 992: 2, 768: 1,}}
                        className="my-masonry-grid"
                        columnClassName="my-masonry-grid_column">
                        {this.state.items.map((item) => <Index key={item.id} item={item}/>)}
                    </Masonry>
                    <Modal/>
                </CatalogContext.Provider>
            </Container>
        );
    }
}

export default Catalog;
