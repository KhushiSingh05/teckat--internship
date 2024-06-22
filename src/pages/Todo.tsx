import React, { useState, useEffect } from 'react';

const Todo: React.FC=()=> {


    const [count, setCount] = useState(0);


    useEffect(() => {
        console.log(`Count is now: ${count}`);
        }, [count]); 

        useEffect(() => {
        console.log(`Count is now:`);
        }, []); 

    
    const incrementCount = () => {
    setCount(count + 5);
    };

    return (
    <div className="App">
        <h1>Counter</h1>
        <p style={{color:'red'}}>Current Count: {count}</p>
        <button onClick={incrementCount}>Increment</button>
    </div>
    );
}

export default Todo;