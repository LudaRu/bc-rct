import React, {Component} from 'react';
import _ from './styles.module.css';
import bg from '../../gradient.module.css';
import {Button, ButtonGroup, Container} from "react-bootstrap";

class Index extends Component {
    constructor(props) {
        super(props);

        this.state = {
            pastView: null,
            nowView: null,
        }
    }

    rollbackView() {

    }

    setNowView() {
        this.setState({pastView: this.state.nowView})
    }

    render() {
        console.log(_.toolbar);
        return (
            <div className = {_.toolbar}>
                <div className={`${_.contentWrapper} ${bg.friday}  shadow`}>
                        <ButtonGroup className="w-100">
                            <Button variant="info">Редактировать</Button>
                            <Button variant="secondary">Закрыть</Button>
                        </ButtonGroup>
                </div>
            </div>
        );
    }
}

export default Index;
