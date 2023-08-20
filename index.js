// console.log(0)
import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import axios from 'axios'
import logger from 'redux-logger'

//acion types
const ADD = 'ADD'
const SUBTRACT = 'SUBTRACT'
const ACCOUNT_INIT = 'account/INIT'
const ACCOUNT_INIT_PENDING = 'account/INIT/pending'
const ACCOUNT_INIT_FULLFILLED = 'account/INIT/fullfilled'
const ACCOUNT_INIT_REJECTED = 'account/INIT/rejected'



const accountReducer = (state={ amount:0 }, action) => {
    // console.log('inside reducer...\n', action)
    switch(action.type) {
        /* 
            changes should not be made in the original state,
            but on the copy of the original state, and that copy should
            be returned
        */
        case ACCOUNT_INIT_FULLFILLED:
            return { ...state, amount: action.payload, pending: false } 

        case ACCOUNT_INIT_PENDING:
            return { ...state, pending: true}

        case ACCOUNT_INIT_REJECTED:
            return { ...state, error: action.error, pending: false }

        case ADD:
            return { ...state, amount: state.amount + action.payload }

        case SUBTRACT: 
            return { ...state, amount: state.amount - action.payload }

        default: return state
    }
}

const bonusReducer = (state={ point: 0 }, action) => {
    switch(action.type) {
        // case INIT:
        //     return { ...state, point: action.payload } 

        case ADD:
            return { ...state, point: state.point + action.payload }

        case SUBTRACT: 
            return { ...state, point: state.point - action.payload }

        default: return state
    }
}

// const store = createStore(reducer, applyMiddleware(logger.default, thunk.default))
const store = createStore(
    combineReducers({
        account: accountReducer,
        bonus: bonusReducer
    }),
    applyMiddleware(logger.default, thunk.default)
)

//global state
// console.log(store.getState())

//actions-creators: acion creators are synchronous, for async actions use thunk-middleware 

// const getUser = async (dispatch, getState) => {
//     const { data } = await axios.get(`http://localhost:3000/accounts/4`)
//     dispatch(initUser(data.amount))
// }

const getUser = (id) => {
    return async (dispatch, getState) => {
        try {
            dispatch(initUserPending())
            const { data } = await axios.get(`http://localhost:3000/accounts/${id}`)
            dispatch(initUserFullfilled(data.amount))
        } catch (error) {
            dispatch(initUserRejected(error.message))
        }
    }
}

const initUserPending = () => {
    return { 
        type: ACCOUNT_INIT_PENDING
    }
}
const initUserFullfilled = (val) => {
    return { 
        type: ACCOUNT_INIT_FULLFILLED,
        payload: val
    }
}
const initUserRejected = (error) => {
    return { 
        type: ACCOUNT_INIT_REJECTED,
        error
    }
}
const increment = (val) => {
    // should return an action
    return { 
        type: ADD,
        payload: val
    }
}
const decrement = (val) => {
    return {
        type: SUBTRACT,
        payload: val
    }
}











//store-subscribe
store.subscribe(()=>{
    // getState() gives the state of the entire store
    console.log(store.getState())
})

store.dispatch(getUser(2))
// store.dispatch(increment(100))
// store.dispatch(decrement(20))
// store.dispatch(increment(45))
// store.dispatch(decrement(69))

// store.dispatch(increment(12))
