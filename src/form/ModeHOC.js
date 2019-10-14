import React from "react";

function ModeHOC(mode, WrappedComponent, body = '') {
    return class extends React.Component {
        constructor(props) {
            super(props);
        }

        render() {
            let elem = null;
            if (mode === 'edit') {
                elem =  <input placeholder={`Текс`}/>
            } else{
                elem =  <WrappedComponent {...this.props}> {body} </WrappedComponent>
            }
            return <>{elem}</>;
        }
    };
}

export default ModeHOC;
