import React, {Component} from 'react';
import {CatalogService} from "../CatalogService";
import {ToolbarService} from "../../../toolbar/ToolbarService";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEdit, faTimesCircle} from "@fortawesome/free-regular-svg-icons";
import {Button, ButtonGroup} from "react-bootstrap";
import {withRouter} from "react-router-dom";


class Create extends Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    componentDidMount() {
        ToolbarService.setView(
            <ButtonGroup className="w-100">
                <Button onClick={() => {}} variant="info">
                    <FontAwesomeIcon icon={faEdit}/> Сохранить
                </Button>
                <Button onClick={() => { ToolbarService.reset();this.props.history.push('/')}} variant="secondary">
                    <FontAwesomeIcon icon={faTimesCircle}/>
                </Button>
            </ButtonGroup>
        );
        // this.props.history.push('/')
    }

    componentWillUnmount() {

    }

    render() {
        return (
            <div>
                Тут типа форма создания
            </div>
        );
    }
}

export default withRouter(Create);
