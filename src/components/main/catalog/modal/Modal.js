import React, {Component} from 'react';
import bg from "../../../../gradient.module.css";
import {withCatalogContext} from "../Catalog";
import {Container} from "react-bootstrap";

class Modal extends Component {
    render() {
        return (
                <Container>
                    {this.props.context.changeItemId}
                </Container>
        );
    }
}

export default withCatalogContext(Modal);
