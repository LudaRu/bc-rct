import React, {Component} from 'react';
import {Image} from "react-bootstrap";

import './style.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faHeart } from '@fortawesome/free-solid-svg-icons'

class Item extends Component {
    render() {
        const { match } = this.props
        return (
            <div className={`bg-light item`}>
                <div className={`item-img`}>
                    <Image
                        fluid
                        rounded
                        src={`https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Square_Lattice_Tiling.svg/220px-Square_Lattice_Tiling.svg.png`}
                    />
                </div>
                <div className={`item-content p-2`}>
                    <div className={`content`}>
                        <div className={"title"}>Ааааааааааааааааааааааааааааааааааааааdddddddddddddddddddddаа</div>
                        <small className="text-primary">@sergey</small>
                        <div className="d-flex justify-content-between s3 footer">
                            <small>Добавлен: 17:25</small>
                            <small>
                                <FontAwesomeIcon icon={faHeart} />
                            </small>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Item;
