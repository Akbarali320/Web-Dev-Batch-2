import React, { useState } from 'react'

const States = ({ val }) => {
    // console.log('val', val)
    const [value, setValue] = useState(val ? val : 0)
    const click = (e) => {
        console.log("I am a button")
    }
    return (
        <>
            <p>Current state is {value}</p>
            <button onClick={click}>click me</button>
        </>
    )
}

export default States