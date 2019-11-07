import React, {Component} from 'react';
import './style.css';
import Tags from "../../../test/Tags";
import {withItemContext} from "./Index";

class FormEdit extends Component {
	constructor(props) {
		super(props);

		this.onChangeValues = this.onChangeValues.bind(this);
	}

	onChangeValues(value) {
		console.log(value)
	}

	render() {
		return (
		    <Tags tags={this.props.context.item.tags} onChangeValues={this.onChangeValues}/>
        );
	}
}

export default withItemContext(FormEdit);
