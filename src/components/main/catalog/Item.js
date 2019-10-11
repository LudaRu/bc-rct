import React, {Component} from 'react';
import {Image} from "react-bootstrap";

import './style.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faHeart } from '@fortawesome/free-solid-svg-icons'

class Item extends Component {
    render() {
        const { item } = this.props;
        return (
            <div className={`bg-light item`}>
                <div className={`item-img`}>
                    <Image fluid rounded src={item.imgUrl} />
                </div>
                <div className={`item-content p-2`}>
                    <div className={`content`}>
                        <div className={"title"}>{item.title}</div>
                        <small className="text-primary">{item.tags   }</small>
                        <div className="d-flex justify-content-between s3 footer">
                            <small>Добавлен: {item.createTime}</small>
                            <FontAwesomeIcon className={'' + (item.isLike ? 'text-danger' : '')} icon={faHeart} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Item;
