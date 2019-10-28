import _ from "../toolbar/styles.module.css";
import bg from "../../gradient.module.css";
import React from "react";
import Index from "../toolbar/Index";

export const ToolbarContext = React.createContext({});

export class ToolbarStore extends React.Component {
    constructor(props) {
        super(props);
        this.pastView = null;

        this.state = {
            nowView: <div>123123</div>,
            rollback: this.rollback.bind(this),
            next: this.next.bind(this),
        };
    }

    rollback() {
        this.setState({nowView: this.pastView});
        this.pastView = null;
    }

    next(view) {
        this.pastView = this.state;
        this.setState({nowView: view});
    }

    render() {
        return <ToolbarContext.Provider value={this.state}>
            {this.props.children}
        </ToolbarContext.Provider>;
    }
}

export const WithContext = (Component) => {
    return (props) => (
        <ToolbarContext.Consumer>
            {({nowView, rollback, next}) => {
                return <Component {...props} nowView={nowView} rollback={rollback} next={next}/>;
            }}
        </ToolbarContext.Consumer>
    )
};
