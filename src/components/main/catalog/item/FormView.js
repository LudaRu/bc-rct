import React, {Component} from 'react';
import {Button, ButtonGroup} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEdit, faTimesCircle} from "@fortawesome/free-regular-svg-icons";
import {ToolbarService} from "../../../toolbar/ToolbarService";

class FormView extends Component {
    constructor(props) {
        super(props);

        this.cancel = this.cancel.bind(this);
    }

    cancel() {
    }

    componentDidMount() {
        const BarViewItem = ({edit}) => (
            <ButtonGroup className="w-100">
                <Button onClick={edit} variant="info">
                    <FontAwesomeIcon icon={faEdit}/> Редактировать
                </Button>
                <Button onClick={() => {ToolbarService.back();this.props.setViewMode();}} variant="secondary">
                    <FontAwesomeIcon icon={faTimesCircle}/>
                </Button>
            </ButtonGroup>
        );

        ToolbarService.setView(<BarViewItem edit={this.props.setEditMode}/>);
    }

    render() {
        return (
            <div>
                <p>Описание</p>
                <small className="text-info">
                    {this.props.item.tags.map(item => '#' + item + ' ')}
                </small>
            </div>
        );
    }
}

export default FormView;
