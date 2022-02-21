import React, { useState } from "react";


const Counter = () => {
    let [counter, setCounter] = useState(0);

    const decrementHandler = () => {
        setCounter(counter - 1)

    }
    const incrementHandler = () => {
        setCounter(counter + 1)

    }
    return (
        <>

            <h1>Counter</h1>
            <div >{counter}
            </div>
            <div>
                <button onClick={decrementHandler}>Decrement</button>
                <button onClick={incrementHandler}>Increment</button>
            </div>
        </>
    )
}
export default Counter;