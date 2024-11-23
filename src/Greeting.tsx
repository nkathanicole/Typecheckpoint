import React from 'react';

// Define the interface for the component props
interface GreetingProps {
    name: string; // name is of type string
}

// Define the functional component with props
const Greeting: React.FC<GreetingProps> = ({ name }) => {
    return <div>Hello, {name}!</div>; // Render the greeting message
};

export default Greeting; // Export the component