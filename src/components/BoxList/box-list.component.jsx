import React from 'react';
import NewBoxForm from '../NewBoxForm/new-box-form.component';
import Box from '../Box/box.component';
// import uuid from 'uuid/dist/v4';

class BoxList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            boxes: []
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.removeBox = this.removeBox.bind(this);
    }

    handleSubmit(newBox) {
        this.setState(state => {
            return {boxes: [...state.boxes, newBox]};
        });
    }

    removeBox(id) {
        console.log(id);
        this.setState(state => {
            return {boxes: state.boxes.filter(box => box.id !== id)};
        }, () => console.log('Removed: ', this.state.boxes));
    } 

    render() {
        return (
            <div>
                <NewBoxForm onSubmit={this.handleSubmit}/>
                {
                    this.state.boxes.length > 0 ? 
                        this.state.boxes.map(box => <Box key={box.id} {...box} removeBox={this.removeBox}></Box>)
                        : <p>No boxes</p>
                }
            </div>
        );
    }
}

export default BoxList;