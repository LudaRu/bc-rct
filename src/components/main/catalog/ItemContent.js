import {Component} from "react";
import React from "react";

export class ItemContent extends Component {
    render() {
        return <>
            <div onMouseDown={this.props.onMouseDown} className="item-img rounded overflow-hidden">
                {this.props.renderImage}
                {this.props.match}
            </div>

            <div className="item-content">
                <div className="h-100 d-flex justify-content-between ">
                    <div onMouseDown={this.props.onMouseDown} className="d-flex flex-column pt-2 pb-2 pl-2 w-100">
                        <div className="title">{this.props.renderTitle}</div>
                        <div className="d-flex justify-content-between footer">
                            {this.props.renderTags}
                        </div>
                    </div>
                </div>
            </div>
        </>;
    }
}
