import React from 'react';
import PropTypes from 'prop-types';
import './style.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlusCircle,} from '@fortawesome/free-solid-svg-icons';
import {faTimesCircle} from '@fortawesome/free-regular-svg-icons';
import {Button, FormControl, InputGroup, ListGroup} from "react-bootstrap";
import {CSSTransition} from "react-transition-group";

class Tags extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			items: props.tags || [],
			input: '',
			focused: false,
			isOpenDropdown: false,
			dropdownItems: this.props.dropdownItems || ['Ou', 'My', 'ifcncomming'],
		};

		this.handleInputChange = this.handleInputChange.bind(this);
		this.handleInputKeyDown = this.handleInputKeyDown.bind(this);
		this.handleRemoveItem = this.handleRemoveItem.bind(this);
		this.onSelect = this.onSelect.bind(this);
		this.addValue = this.addValue.bind(this);
	}

	addValue(value) {
		value = value.replace(/\s/g, '').trim().toLowerCase();
		if (!this.state.items.includes(value)) {
			this.setState(state => ({
				items: [...state.items, value],
				input: ''
			}), () => {
				this.props.onChangeValues(this.state.items);
			});
		}
	}

	handleInputChange(evt) {
		let value = evt.target.value.replace(/\s/g, '').trim().toLowerCase();
		this.setState({isOpenDropdown: value.length >= 3});
		this.setState({input: value});
	}

	handleInputKeyDown(evt) {
		const codes = [
			13, // enter
			9, // tab
		];

		if (codes.includes(evt.keyCode)) {
			let value = evt.target.value.replace(/\s/g, '').trim().toLowerCase();
			if (value !== '') {
				this.addValue(value);
			}
		}
	}

	handleRemoveItem(index) {
		return () => {
			this.setState(state => ({
				items: state.items.filter((item, i) => i !== index)
			}));
		};
	}

	onSelect(value) {
		this.addValue(value);
		this.setState({isOpenDropdown: false});
	}

	render() {

		return (<>
				<InputGroup>
					<FormControl value={this.state.input}
								 onChange={this.handleInputChange}
								 onKeyDown={this.handleInputKeyDown}
								 placeholder="Тэг"/>
					{/*<InputGroup.Append>*/}
					{/*	<Button variant="primary"><FontAwesomeIcon icon={faPlusCircle}/></Button>*/}
					{/*</InputGroup.Append>*/}
				</InputGroup>

				<CSSTransition in={this.state.isOpenDropdown} timeout={500} classNames="tags-dropdown" unmountOnExit>
					<ListGroup>
						{this.state.dropdownItems.map( item => {
							return <ListGroup.Item key={item} action onClick={() => {this.onSelect(item)}}>{item}</ListGroup.Item>
						})}
					</ListGroup>
				</CSSTransition>

				<div className="mr-n2 mb-n2 mt-2">
					{this.state.items.map((item, i) =>
						<div className="btn btn-sm btn-info mr-2 mb-2" key={i} onClick={this.handleRemoveItem(i)}>
							{item}  <FontAwesomeIcon icon={faTimesCircle}/>
						</div>
					)}
				</div>

			</>
		);
	}
}

Tags.propTypes = {
	dropdownItems: PropTypes.array,
	tags: PropTypes.array,
	onChangeValues: PropTypes.func.isRequired,
};

export default Tags;


class CustomMenu extends React.Component {
	constructor(props, context) {
		super(props, context);

		this.handleChange = this.handleChange.bind(this);

		this.state = { value: '' };
	}

	handleChange(e) {
		this.setState({ value: e.target.value.toLowerCase().trim() });
	}

	render() {
		const {
			children,
			style,
			className,
			'aria-labelledby': labeledBy,
		} = this.props;

		const { value } = this.state;

		return (
			<div style={style} className={className} aria-labelledby={labeledBy}>
				<FormControl
					autoFocus
					className="mx-3 my-2 w-auto"
					placeholder="Type to filter..."
					onChange={this.handleChange}
					value={value}
				/>
				<ul className="list-unstyled">
					{React.Children.toArray(children).filter(
						child =>
							!value || child.props.children.toLowerCase().startsWith(value),
					)}
				</ul>
			</div>
		);
	}
}