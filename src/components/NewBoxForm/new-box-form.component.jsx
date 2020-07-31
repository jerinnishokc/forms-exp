import React from 'react';
import './new-box-form.styles.css';
import uuid from 'uuid/dist/v4';

class NewBoxForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            height: '',
            width: '',
            backgroundColor: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        const newBox = {...this.state,id: uuid()};
        console.log('Submit: ', newBox);
        this.props.onSubmit(newBox)
        this.setState({ 
            id: '',
            height: '',
            width: '',
            backgroundColor: ''
        });
        
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="height">Height: </label>
                <input 
                    type="text"
                    name="height"
                    id="height"
                    value={this.state.height}
                    placeholder="Enter height"
                    onChange={this.handleChange}
                />
                <label htmlFor="height">Width: </label>
                <input 
                    type="text"
                    name="width"
                    id="width"
                    value={this.state.width}
                    placeholder="Enter width"
                    onChange={this.handleChange}
                />
                <label htmlFor="height">Background Color: </label>
                <input 
                    type="text"
                    name="backgroundColor"
                    id="backgroundColor"
                    value={this.state.backgroundColor}
                    placeholder="Enter background color"
                    onChange={this.handleChange}
                />
                <button>Add a new box</button>
            </form>
        );
    }
}

export default NewBoxForm;