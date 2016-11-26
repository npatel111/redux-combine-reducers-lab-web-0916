import React, { Component } from 'react'
// import {combineReducers} from 'redux'
// const rootReducer = combineReducers({books, recommendedBooks})

export function combineReducers(reducers) { //accepts current state and action
  return (state = {}, action) => {
    return Object.keys(reducers).reduce(//grabs keys off reducer objects, uses reduce function
      (nextState, key) => {//which takes argument of function, starting value
        nextState[key] = reducers[key](state[key], action);
        return nextState
      }, {}
    )
  }
}


export function books(state = [], action) {
  switch (action.type) {
    case "ADD_BOOK":
      return [].concat(state, action.payload)
    case "REMOVE_BOOK":
      let idx = state.indexOf(action.payload)
      return [].concat(state.slice(0,idx), state.slice(idx+1, state.length))
    default: return state
  }
}

export function recommendedBooks(state = [], action) {
  switch (action.type) {
    case "ADD_RECOMMENDED_BOOK":
      return [].concat(state, action.payload)
    case "REMOVE_RECOMMENDED_BOOK":
      let idx = state.indexOf(action.payload)
      return [].concat(state.slice(0, idx), state.slice(idx + 1, state.length))
    default: return state
  }
}
