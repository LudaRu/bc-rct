import React, {Component} from 'react';
import Inputs from "../../../test/Inputs";
import './style.css';
import {CSSTransition, TransitionGroup} from "react-transition-group";
import {Element} from "react-scroll";
import ItemEdit from "./ItemEdit";
import {Button} from "react-bootstrap";

class ItemView extends Component {
	constructor(props) {
		super(props);
		this.state = {
			component: null,
			id: 1
		};
	}

	componentDidMount() {

		const el1 = <>йййй<Button onClick={() => {
			this.setState({component: el2});
			this.setState({id: 2});
		}}>Редактировать</Button></>;

		const el2 = <>чччч<Button onClick={() => {
			this.setState({component: el1});
			this.setState({id: 1});
		}}>Норм</Button></>;

		this.setState({component: el1});
		this.setState({id: 1});
	};

	render() {
		const {component, id} = this.state;
		return (<div className="p-2">
			<TransitionGroup  component={null}>
				<CSSTransition
					timeout={300}
					classNames="page"
					key={1}
				><>{component}</>
				</CSSTransition>
			</TransitionGroup>
		</div>);
	}
}

export default ItemView;