import React, { Component } from "react";
import Box from "./box";

class Boxes extends Component {
    state = {
        boxes: [
            { id: 1, x: 5 },
            { id: 2, x: 10 },
            { id: 3, x: 15 },
            { id: 4, x: 20 },
        ],
    };

    handleClickDelete = (boxId) => {
        const boxes = this.state.boxes.filter(
            b => b.id !== boxId
        );
        this.setState({boxes});
    }
    render() {
        return (
            <React.Fragment>
                {this.state.boxes.map((box) => {
                    return <Box key={box.id} x={box.x} id={box.id}
                        handleClickDelete={this.handleClickDelete}/>;
                })}
            </React.Fragment>
        );
    }
}

export default Boxes;
