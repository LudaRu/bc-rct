import {Component} from "react";
import React from "react";
import './style.css';
import {Button} from "react-bootstrap";

export default class Header extends Component {
    render() {
        return <div className="mt-2 mb-4">
            <div className="header bg-white rounded shadow-sm">
                <Button variant="info">+</Button>
            </div>
        </div>;
    }
}
