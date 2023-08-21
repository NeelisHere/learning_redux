import { useDispatch, useSelector } from "react-redux"
import { increment, decrement, incrementByValue } from "../slices/counterSlice.js"
import { useState } from "react"

const Counter = () => {
    const [val, setVal] = useState({
        incVal: 0, decVal: 0
    })
    const value = useSelector((state)=>state.counter.value)
    const dispatch = useDispatch()
    const counterStyle = {
        border: '2px solid black',
        margin: '20px',
        padding: '5px',
        width: '40%'
    }
    return (
        <div style={counterStyle}>
            <h1>{value}</h1>
            <div>
                <button onClick={()=>{dispatch(increment())}}>+1</button>
                <button onClick={()=>{dispatch(decrement())}}>-1</button>
            </div>
            <div>
                <input 
                    type="number" 
                    onChange={(e)=>{
                        setVal({
                            ...val, 
                            incVal: parseInt(e.target.value)
                        })
                    }}/>
                <button 
                    onClick={()=>{
                        const x = isNaN(val.incVal) ? 0 : parseInt(val.incVal)
                        dispatch(incrementByValue(x))
                    }}>
                    +{ isNaN(val.incVal) ? '0' : val.incVal}
                </button>
            </div>
        </div>
    )
}

export default Counter
