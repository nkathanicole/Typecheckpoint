import React, { Component } from 'react';

// Define the interface for the component state
interface CounterState {
    count: number; // count is of type number
}

// Define an empty interface for props since there are no props
interface CounterProps {}

// Create the Counter component extending React.Component
class Counter extends Component<CounterProps, CounterState> {
    state: CounterState = {
        count: 0 // Initialize count to 0
    };

    // Type the increment method
    increment = (): void => {
        this.setState({ count: this.state.count + 1 }); // Update the state
    };

    // Correctly format the render method
    render() {
        return (
            <div>
                <p>Count: {this.state.count}</p>
                <button onClick={this.increment}>Increment</button>
            </div>
        );
    }
}

export default Counter; // Export the component