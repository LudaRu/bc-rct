import React, {Component, useState} from 'react';
import {CSSTransition} from 'react-transition-group';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            flag: false,
        };
    }

    componentDidMount() {

    }

    componentWillUnmount() {
    }

    setFlag(flag) {
        this.setState({flag: flag});
    }

    render() {
        const {flag} = this.state;


        return (
            <>
                <div onClick={() => {this.setState({flag: true})}}>xxx</div>
                <CSSTransition
                    in={flag}
                    timeout={300}
                    classNames="my-node"
                    unmountOnExit
                >
                    <div onClick={() => {this.setState({flag: false})}}>xxxx</div>
                </CSSTransition>
            </>
        );
    }
}

export default Home;

