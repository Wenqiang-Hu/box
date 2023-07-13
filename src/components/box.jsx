import React, { Component } from "react";

class Box extends Component {

    getStyle() {
        let style = {
            width: 50,
            height: 50,
            backgroundColor: "lightBlue",
            textAlign: "center",
            lineHeight: "50px",
            marginLeft: this.props.box.x,
            userSelect: null,
        };
        if (this.props.box.x === 0) {
            style.backgroundColor = "orange";
        }
        return style;
    }

    
    render() {
        return (
            <React.Fragment>
                <div style={this.getStyle()}>{this.props.box.x}</div>
                <button
                    onClick={this.props.handleClickLeft}
                    type="button"
                    className="btn btn-primary m-2"
                >
                    Left
                </button>
                <button
                    onClick={this.props.handleClickRight}
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
