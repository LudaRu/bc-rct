import React, {Component} from 'react';
import _ from './styles.module.css';
import {ToolbarService} from "./ToolbarService";
import {CSSTransition, TransitionGroup} from "react-transition-group";
import fadeTransition from "./animate.module.css";

class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            trigger: true,
        };
    }

    componentDidMount() {
        this.subCatalogService = ToolbarService.getView().subscribe(v => {
            this.setState({nowView: v});
            this.setState({trigger: !this.state.trigger});
        });
    }

    componentWillUnmount() {
        this.subCatalogService.unsubscribe();
    }

    render() {
        const {trigger} = this.state;
        return (<TransitionGroup>
            <CSSTransition
                timeout={500}
                classNames={fadeTransition}
                key={trigger}
            >
                <Wrapper nowView={this.state.nowView}/>
            </CSSTransition>
        </TransitionGroup>);
    }
}

export default Index;



const Wrapper = ({nowView}) => (
    <div className={_.toolbar}>
        {nowView}
    </div>
);
