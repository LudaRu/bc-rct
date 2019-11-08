import React, {Component} from 'react';
import {Modal, Container} from "react-bootstrap";

function ModalWrapper(props) {
    return (
        <Modal {...props} aria-labelledby="contained-modal-title-vcenter">
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Using Grid in Modal
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                123123123
            </Modal.Body>
        </Modal>
    );
}

export default ModalWrapper;
