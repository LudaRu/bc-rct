import React, {Component} from 'react';
import './style.css';
import {withItemContext} from "./Index";


class ContentMore extends Component {
    render() {
        return (
            <div className="p-2">
                <p>Описание</p>
                <small className="text-info">
                    {this.props.context.item.tags.map(item => '#' + item + ' ')}
                </small>
            </div>
        );
    }
}

export default withItemContext(ContentMore);
