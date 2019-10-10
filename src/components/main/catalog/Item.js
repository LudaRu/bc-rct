import React, {Component} from 'react';

class Item extends Component {
    render() {
        const { match } = this.props
        return (
            <div>
                asdads
                {match.params.topicId}
            </div>
        );
    }
}

export default Item;
