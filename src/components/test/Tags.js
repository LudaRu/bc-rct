import React, {Component} from 'react';
import './style.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlusCircle} from '@fortawesome/free-solid-svg-icons';

const COUNTRIES = [
    "Afghanistan",
    "Albania",
    "Algeria",
    "Andorra",
    "Angola",
    "Anguilla",
    "Antigua &amp; Barbuda",
    "Argentina",
    "Armenia",
    "Aruba",
    "Australia",
    "Austria",
    "Azerbaijan",
    "Bahamas",
    "Bahrain",
    "Bangladesh",
    "Barbados",
];

class Tags extends Component {
    constructor(props) {
        super(props);

        this.state = {
            items: [],
            focused: false,
            input: ''
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleInputKeyDown = this.handleInputKeyDown.bind(this);
        this.handleRemoveItem = this.handleRemoveItem.bind(this);
    }

    handleInputChange(evt) {
        this.setState({ input: evt.target.value });
    }

    handleInputKeyDown(evt) {
        const codes = [
            13, // enter
            32, // spase
            9, // tab
        ];


        if (codes.includes(evt.keyCode)) {
            let value = evt.target.value;
            value = value.trim();

            if (value !== '') {
                value = value.toUpperCase();
                if (!this.state.items.includes(value))
                {
                    this.setState(state => ({
                        items: [...state.items, value.toUpperCase()],
                        input: ''
                    }));
                }

                console.log(this.state.items)
            }
        }
    }

    handleRemoveItem(index) {
        return () => {
            this.setState(state => ({
                items: state.items.filter((item, i) => i !== index)
            }));
        }
    }

    render() {
        const styles = {
            container: {
                padding: '5px',
                borderRadius: '5px',
            },
        };
        return (
            <label>
                <div className="mt-2 ml-2">
                    {this.state.items.map((item, i) =>
                        <div className="btn btn-sm btn-primary mr-2 mb-2" key={i} style={styles.items} onClick={this.handleRemoveItem(i)}>
                            {item}
                        </div>
                    )}

                    <div>
                        <div className="input-group">
                            <input type="text" className="form-control" value={this.state.input} onChange={this.handleInputChange} onKeyDown={this.handleInputKeyDown} />
                                <div className="input-group-append">
                                    <button className="btn btn-outline-secondary" type="button"><FontAwesomeIcon icon={faPlusCircle}/></button>
                                </div>
                        </div>
                    </div>

                </div>

            </label>
        );
    }
}

export default Tags;
