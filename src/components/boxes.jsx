import React, { Component } from "react";
import Box from "./box";

class Boxes extends Component {
    state = {
        boxes: [
            { id: 1, x: 0 },
            { id: 2, x: 10 },
            { id: 3, x: 15 },
            { id: 4, x: 20 },
        ],
    };

    handleClickLeft = (box) => {
        let boxes = [...this.state.boxes];
        const k = this.state.boxes.indexOf(box);
        boxes[k] = { id: box.id, x: box.x - 1 };
        this.setState({ boxes });
    };

    handleClickRight = (box) => {
        let boxes = [...this.state.boxes];
        const k = this.state.boxes.indexOf(box);
        boxes[k] = { id: box.id, x: box.x + 1 };
        this.setState({ boxes });
    };

    handleClickDelete = (boxId) => {
        const boxes = this.state.boxes.filter((b) => b.id !== boxId);
        this.setState({ boxes });
    };

    handleClickReset = () => {
        const boxes = this.state.boxes.map((box) => {
            return { id: box.id, x: 0 };
        });
        this.setState({ boxes });
    };

    render() {
        return (
            <React.Fragment>
                <button
                    onClick={this.handleClickReset}
                    type="button"
                    className="btn btn-success m-2"
                >
                    Reset
                </button>
                {this.state.boxes.map((box) => {
                    return (
                        <Box
                            key={box.id}
                            box={box}
                            handleClickLeft={() => this.handleClickLeft(box)}
                            handleClickRight={() => this.handleClickRight(box)}
                            handleClickDelete={this.handleClickDelete}
                        />
                    );
                })}
            </React.Fragment>
        );
    }
}

export default Boxes;
