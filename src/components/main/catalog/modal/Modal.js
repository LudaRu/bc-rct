import React, {Component} from 'react';
import bg from "../../../../gradient.module.css";
import {withCatalogContext} from "../Catalog";
import {Container} from "react-bootstrap";

class Modal extends Component {
    render() {
        return (
            <div className={`${this.props.context.modalShow ? "d-block" : "d-none"} ${bg.friday} itemModalWrapper`}>
                <Container>
                    <div>xxxx</div>
                    <div>xxxx</div>
                    <div>xxxx</div>
                    <div>xxxx</div>
                </Container>
            </div>
        );
    }
}

export default withCatalogContext(Modal);
