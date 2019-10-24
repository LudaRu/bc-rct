import React, {Component} from 'react';
import './style.css';
import Tags from "../../../test/Tags";
import PropTypes from "prop-types";

class EditForm extends Component {
	constructor(props) {
		super(props);

		this.onChangeValues = this.onChangeValues.bind(this);
	}

	onChangeValues(value) {
		console.log(value)
	}

	render() {
		return (<div className="p-2">
				<Tags tags={this.props.item.tags} onChangeValues={this.onChangeValues}/>
			</div>);
	}
}

EditForm.propTypes = {
	item: PropTypes.object,
};

export default EditForm;
