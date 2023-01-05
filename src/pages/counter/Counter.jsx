import React, { useState } from 'react';

const Counter = () => {
    const [state, setstate] = useState(0);
    return (
        <div style={{ color: 'white', display: 'flex', flexDirection: "row" }}>
            <button onClick={() => setstate(0)}>0</button>
            <button onClick={() => setstate(state - 1)}>-</button>
            {state}
            <button onClick={() => setstate(state + 1)}>+</button>
            <button onClick={() => setstate(100)}>100</button>
        </div>
    )
}; export default Counter
