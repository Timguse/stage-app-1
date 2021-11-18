import React, { Component } from 'react'

class Counter extends Component {
    state = {
        value: this.props.counter.value
    };

    styles = {
        fontSize: 20,
        fontWeight: "bold"
    };

    render() {
        console.log("props", this.props);

        return (
            <div>
                <p>{this.props.children}</p>
                <span style={this.styles} className={this.getBtnClasses()}>{this.state.value}</span>
                <button
                    onClick={() => this.handleIncrement({ id: 1 })}
                    style={this.styles} className="btn btn-secondary m-2">+
                </button>
                <button
                    onClick={() => this.delete({ id: 1 })}
                    style={this.styles} className="btn btn-secondary m-2">-
                </button>
                <button
                    onClick={() => this.props.onDelete(this.props.counter.id)}
                    className="btn btn-danger m2">Delete
                </button>
            </div>

        );
    }

    getBtnClasses() {
        let classes = "btn m-2 btn-";
        classes += (this.state.value === 0) ? "warning" : "primary";
        return classes;
    };

    handleIncrement = product => {
        console.log(product);
        this.setState({ value: this.state.value + 1 })
    };

    delete = product => {
        console.log(product);
        this.setState({ value: this.state.value - 1 })
    };
}
export default Counter;