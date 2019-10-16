import React, {Component} from 'react';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import ResponsiveEmbed from "react-bootstrap/ResponsiveEmbed";
import Item from "./catalog/Item";

const item = {
    id: 1,
    imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Square_Lattice_Tiling.svg/220px-Square_Lattice_Tiling.svg.png',
    title: 'Автоклав бойлер формовочный компрессор',
    tags: '123 ',
    createTime: '12:44',
    isLike: false,
};

class Catalog extends Component {
    render() {
        const {match} = this.props;
        return (
            <Container>
                <Row>
                    {[...Array(50).keys()].map(v => {
                        return <Col className={``} xs={12} md={6} lg={4}>
                            <div className={`pb-3 pt-sm-3 pb-sm-3`}>
                                <Item item={item}/>
                            </div>
                        </Col>
                    })}
                </Row>
            </Container>
        );
    }
}

export default Catalog;
