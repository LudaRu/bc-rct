import React, {Component} from 'react';
import './style.css';
import Tags from "../../../test/Tags";
import PropTypes from "prop-types";
import {Button, ButtonGroup} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEdit, faTimesCircle} from "@fortawesome/free-regular-svg-icons";
import {ToolbarService} from "../../../toolbar/ToolbarService";

class FormEdit extends Component {
	constructor(props) {
		super(props);

		this.onChangeValues = this.onChangeValues.bind(this);
	}

    componentDidMount() {
        const BarViewItem = ({edit}) => (
            <ButtonGroup className="w-100">
                <Button onClick={edit} variant="success">
                    <FontAwesomeIcon icon={faEdit}/> Сохранить
                </Button>
                <Button onClick={ToolbarService.back} variant="secondary">
                    <FontAwesomeIcon icon={faTimesCircle}/>
                </Button>
            </ButtonGroup>
        );

        ToolbarService.setView(<BarViewItem edit={this.props.setEditMode}/>);
    }

	onChangeValues(value) {
		console.log(value)
	}

	render() {
		return (
		    <Tags tags={this.props.item.tags} onChangeValues={this.onChangeValues}/>
        );
	}
}

FormEdit.propTypes = {
	item: PropTypes.object,
};

export default FormEdit;
