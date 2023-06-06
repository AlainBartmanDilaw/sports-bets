import React, { useState } from 'react';

const Counter = () => {
    // Declare a state variable named "count" and initialize it to 0
    const [ count, setCount ] = useState(0);

    const increment = () => {
        // Update the "count" state variable by incrementing it
        setCount(count + 1);
    };

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={increment}>Increment</button>
        </div>
    );
};

export default Counter;
