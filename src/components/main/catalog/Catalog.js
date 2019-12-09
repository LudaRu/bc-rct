import React, {Component} from 'react';
import Index from "./item/Index";
import Masonry from 'react-masonry-css';
import Container from "react-bootstrap/Container";
import {Data} from "./data";



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
            items: Data,
            hasOpenItem: false,
            setHasOpenItem: (v) => {this.setState({hasOpenItem: v})},
            openItem:null,
            setOpenItem: (v) => {this.setState({openItem: v})},
        };
    }

    componentWillUnmount() {
        this.subCatalogService.unsubscribe();
    }

    render() {
        return (
            <Container className="mb-5">
                <CatalogContext.Provider value={this.state}>
                    {this.state.items.map((item) => <Index key={item.id} item={item}/>)}
                </CatalogContext.Provider>
            </Container>
        );
    }
}

export default Catalog;
