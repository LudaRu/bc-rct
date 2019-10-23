import React, {Component} from 'react';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Item from "./item/Item";
import Masonry from 'react-masonry-css';
import {CatalogService} from "./CatalogService";

// xs	<576px
// true | "auto" | number | { span: true | "auto" | number, offset: number, order: number }
//
// sm	≥576px
// true | "auto" | number | { span: true | "auto" | number, offset: number, order: number }
//
// md	≥768px
// true | "auto" | number | { span: true | "auto" | number, offset: number, order: number }
//
// lg	≥992px
// true | "auto" | number | { span: true | "auto" | number, offset: number, order: number }
//
// xl	≥1200px
// true | "auto" | number | { span: true | "auto" | number, offset: number, order: number }

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
            <Container>
                <Masonry
                    breakpointCols={{default: 3, 992: 2, 768: 1,}}
                    className="my-masonry-grid"
                    columnClassName="my-masonry-grid_column">
                    {this.state.items.map((item) => <Item item={item}/>)}
                </Masonry>
            </Container>
        );
    }
}

export default Catalog;
