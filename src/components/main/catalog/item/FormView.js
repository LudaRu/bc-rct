import React, {Component} from 'react';
import {withItemContext} from "./Index";

class FormView extends Component {
    componentDidMount() {

    }

    render() {
        return (
            <div>
                <p>Описание</p>
                <small className="text-info">
                    {this.props.context.item.tags.map(item => '#' + item + ' ')}
                </small>
            </div>
        );
    }
}

export default withItemContext(FormView);
