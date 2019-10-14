import React, {Component, useState} from 'react';
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import ModeHOC from "../../form/ModeHOC";


const NewComponent = ModeHOC('edit', Button, 'Кнопка');

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modalShow: false,
            show: () => {this.setState({modalShow: true})},
            hide: () => {this.setState({modalShow: false})},
        };
    }

    componentDidMount() {

    }

    componentWillUnmount() {
    }

    render() {
        const {modalShow, show, hide} = this.state;



        return (
            <>
                <NewComponent mode="edit" variant="warning" onClick={show} />
                {/*{InfoWithHover}*/}
                <Button variant="primary" onClick={show}>Launch demo modal</Button>
                {/*<Button variant="secondary" onClick={show}>Launch demo modal</Button>*/}
                {/*<Button variant="danger" onClick={show}>Launch demo modal</Button>*/}
                {/*<Button variant="warning" onClick={show}>Launch demo modal</Button>*/}
                {/*<Button variant="success" onClick={show}>Launch demo modal</Button>*/}

                <Modal show={modalShow} onHide={hide}>
                    <Modal.Header closeButton>
                        <Modal.Title>Modal heading</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={hide}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={hide}>
                            Save Changes
                        </Button>
                    </Modal.Footer>
                </Modal>
            </>
        );
    }
}
export default Home;

