import React from 'react';
import './box.styles.css';

const Box = (props) => {
    const handleClick = () => {
        props.removeBox(props.id);
    };

    return (
        <div>
            <div style={{height:`${props.height}px`, width: `${props.width}px`, backgroundColor: `${props.backgroundColor}`}}>Box</div>
            <button onClick={handleClick}>Remove the box</button>
        </div>
    );
}

export default Box;