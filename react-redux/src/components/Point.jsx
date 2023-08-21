import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment } from '../slices/pointSlice'

const Point = () => {
    const point = useSelector((state)=>state.point.point)
    const dispatch = useDispatch()
    const pointStyle = {
        border: '2px solid black',
        margin: '20px',
        padding: '5px',
        width: '40%'
    }
    return (
        <div style={pointStyle}>
            <h1>{point}</h1>
            <button onClick={()=>{dispatch(increment())}}>+1</button>
        </div>
    )
}

export default Point
