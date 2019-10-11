import React, {Component} from 'react';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import ResponsiveEmbed from "react-bootstrap/ResponsiveEmbed";
import Item from "./catalog/Item";

class Catalog extends Component {
    render() {
        const {match} = this.props
        return (
            <Container fluid>
                <Row noGutters>
                    {[...Array(50).keys()].map(v => {
                        return <Col className={``} xs={12} sm={6} lg={3}><div className={`p-1`}><Item/></div></Col>
                    })}
                </Row>
            </Container>
        );
    }
}

export default Catalog;
