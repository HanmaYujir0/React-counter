import { createAction, createReducer } from "@reduxjs/toolkit";

const initialState = {
  counter: 0
}

export const inc = createAction('inc');
export const dic = createAction('dic')
export const res = createAction('res')

const counterReducer = createReducer(initialState, (builder) => {
  builder
  .addCase(inc, (state) => {
    state.counter += 1
  })
  .addCase(dic, (state) => {
    if(state.counter !== 0) {
    state.counter -= 1
    }
  })
  .addCase(res, (state) => {
    state.counter *= 0
  })
})

export default counterReducer;