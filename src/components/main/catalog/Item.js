import React, {Component} from 'react';
import {Image} from "react-bootstrap";
// import { AnimateOnChange } from 'react-animation'
import posed, {PoseGroup} from 'react-pose';

import './style.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEdit, faHeart as farHeart, faTimesCircle} from '@fortawesome/free-regular-svg-icons';
import {faHeart, faCheckCircle, faTrashAlt} from '@fortawesome/free-solid-svg-icons';
import {easing} from "popmotion";


// const Box = posed.div({
//     pressable: true,
//     init: { scale: 1},
//     press: {scale: 1.2},
//     pressEnd: {
//         color: "#f00",
//         scale: 1,
//         transition: {
//             color: {
//                 type: "keyframes",
//                 values: ["#f00", "#00f", "#f00"],
//                 loop: Infinity,
//                 ease: easing.easeInOut,
//                 duration: 3000
//             },
//             scale: {
//                 type: "keyframes",
//                 values: [1.9, 4, 2, 1, 0.5],
//                 loop: Infinity,
//                 ease: easing.easeInOut,
//                 duration: 3000
//             }
//         }
//     },
// });

const Box = posed.div({
	pressable: true,
	init: {scale: 1},
	press: {scale: 1.3},
	pressEnd: {
		scale: 1,
		transition: {
			type: 'spring',
			stiffness: 500
		}
	},
});

const BoxItem = posed.div({
	blob: {
		zIdex: 100,
		scale: 1.1,
		transition: {
			type: 'spring',
			stiffness: 500
		}
	},
	none: {
		zIdex: 100,
		scale: 1,
		transition: {
			type: 'spring',
			stiffness: 500
		}
	},
});

class Item extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isLike: props.item.isLike,
			mode: 'view',
			isBlob: false,
		};

		this.toggleLike = this.toggleLike.bind(this);
		this.toggleMode = this.toggleMode.bind(this);
		this.renderImage = this.renderImage.bind(this);
		this.renderTitle = this.renderTitle.bind(this);
		this.renderTags = this.renderTags.bind(this);


		this.toggleBlob = this.toggleBlob.bind(this);


		this.renderToolbar = this.renderToolbar.bind(this);
	}

	toggleBlob() {
		this.setState({isBlob: !this.state.isBlob});
	}

	toggleLike() {
		this.setState({isLike: !this.state.isLike});
	}

	toggleMode() {
		this.setState({mode: (this.state.mode === 'view') ? 'edit' : 'view'});
	}

	render() {
		const {match} = this.props;
		return <BoxItem pose={this.state.isBlob ? 'blob' : 'none'}>
			<div className="bg-white rounded item shadow-sm">
				<div onMouseDown={this.toggleBlob} className="item-img rounded overflow-hidden">
					{this.renderImage()}
					{match}
				</div>
				<div className="item-content">
					<div className="h-100 d-flex justify-content-between ">
						<div onMouseDown={this.toggleBlob} className="d-flex flex-column pt-2 pb-2 pl-2 w-100">
							<div className="title">{this.renderTitle()}</div>
							<div className="d-flex justify-content-between footer">
								{this.renderTags()}
							</div>
						</div>
						<div className="item-toolbar d-flex justify-content-between flex-column p-2">
							{this.renderToolbar()}
						</div>
					</div>
				</div>
			</div>
		</BoxItem>;
	}

	renderImage() {
		return (this.state.mode === 'view')
			? <Image fluid src={this.props.item.imgUrl}/> : <input className="w-100" type={`text`}/>;
	}

	renderTitle() {
		return (this.state.mode === 'view')
			? this.props.item.title : <input className="w-100" type={`text`}/>;
	}

	renderTags() {
		return (this.state.mode === 'view')
			? <small className="text-primary ">{this.props.item.tags}</small> :
			<input className="w-100" type={`text`}/>;
	}

	renderToolbar() { // fixme css
		const view = <>
			<FontAwesomeIcon onClick={this.toggleMode} className="cursor" icon={faEdit}/>

			<Box onClick={this.toggleLike}>
				<FontAwesomeIcon
					className={'cursor ' + (this.state.isLike ? 'text-danger' : '')}
					icon={this.state.isLike ? faHeart : farHeart}/>
			</Box>

		</>;

		const edit = <>
			<FontAwesomeIcon onClick={this.toggleMode} className="cursor" icon={faTimesCircle}/>
			<FontAwesomeIcon className="cursor" icon={faTrashAlt}/>
			<FontAwesomeIcon className="cursor" icon={faCheckCircle}/>
		</>;

		return this.state.mode === 'view' ? view : edit;
	}
}

export default Item;
