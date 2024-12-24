import React, { useState } from 'react'

  function Counter(){
    const [count,setcount] = useState(0);
    const increment =() => {
        setcount(count + 1);
    };
    const decrement =() => {
        setcount(count - 1);
    };
    return (
       <div className="app">
        <h1>Counter App</h1>
        <p>
            Current Count:{count}
        </p>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
       </div>
    );
}
  


export default Counter;