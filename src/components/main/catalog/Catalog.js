import React, {Component} from 'react';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Index from "./item/Index";
import Masonry from 'react-masonry-css';
import {CatalogService} from "./CatalogService";
import Header from "./header/Header";

class Catalog extends Component {

    constructor(props) {
        super(props);

        this.state = {
            items: []
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
            <>
                <Masonry
                    breakpointCols={{default: 3, 992: 2, 768: 1,}}
                    className="my-masonry-grid"
                    columnClassName="my-masonry-grid_column">
                    {this.state.items.map((item) => <Index key={item.id} item={item}/>)}
                </Masonry>
            </>
        );
    }
}

export default Catalog;
