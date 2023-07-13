import React, { Component } from "react";

class Box extends Component {
    state = {
        x: this.props.x,
    };

    getStyle() {
        let style = {
            width: 50,
            height: 50,
            backgroundColor: "lightBlue",
            textAlign: "center",
            lineHeight: "50px",
            marginLeft: this.state.x,
            userSelect: null,
        };
        if (this.state.x === 10) {
            style.backgroundColor = "orange";
        }
        return style;
    }

    handleClickLeft = (step) => {
        this.setState({
            x: this.state.x - step,
        });
    };
    handleClickRight = (step) => {
        this.setState({
            x: this.state.x + step,
        });
    };
    render() {
        return (
            <React.Fragment>
                <div style={this.getStyle()}>{this.state.x}</div>
                <button
                    onClick={() => this.handleClickLeft(5)}
                    type="button"
                    className="btn btn-primary m-2"
                >
                    Left
                </button>
                <button
                    onClick={() => this.handleClickRight(5)}
                    type="button"
                    className="btn btn-secondary m-2"
                >
                    Right
                </button>
                <button
                    onClick={() => this.props.handleClickDelete(this.props.id)}
                    type="button"
                    className="btn btn-danger m-2"
                >
                    Delete
                </button>
            </React.Fragment>
        );
    }
}

export default Box;
