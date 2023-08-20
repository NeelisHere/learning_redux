import { useDispatch, useSelector } from "react-redux"
import { increment } from "../slices/counterSlice.js"

const Counter = () => {
    const value = useSelector((state)=>state.counter.value)
    const dispatch = useDispatch()

    return (
        <div>
            <h1>{value}</h1>
            <div>
                <button onClick={()=>{dispatch(increment())}}>+1</button>
                <button>-1</button>
            </div>
        </div>
    )
}

export default Counter
