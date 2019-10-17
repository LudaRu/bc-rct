import React, {Component} from 'react';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import ResponsiveEmbed from "react-bootstrap/ResponsiveEmbed";
import Item from "./catalog/Item";
import Masonry from 'react-masonry-css'
import posed, { PoseGroup } from 'react-pose'

const item = {
    id: 1,
    imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Square_Lattice_Tiling.svg/220px-Square_Lattice_Tiling.svg.png',
    title: 'Автоклав бойлер формовочный компрессор',
    tags: '123 ',
    createTime: '12:44',
    isLike: false,
};

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

const Itemx = posed.div({
    enter: { opacity: 1 },
    exit: { opacity: 0 }
})

class Catalog extends Component {
    render() {
        const {match} = this.props;
        return (
            <Container>
                <Masonry
                    breakpointCols={{default: 3,992: 2,768: 1,}}
                    className="my-masonry-grid"
                    columnClassName="my-masonry-grid_column">
                    {[...Array(50).keys()].map(v => {
                        return <Item item={item}/>
                    })}
                </Masonry>

                <Row>
                    {[...Array(50).keys()].map(v => {
                        // return <Col className="" xs={12} md={6} lg={4}>
                        //     <div className={`pb-3 pt-sm-3 pb-sm-3`}>
                        //         <Item item={item}/>
                        //     </div>
                        // </Col>
                    })}
                </Row>
            </Container>
        );
    }
}

export default Catalog;
