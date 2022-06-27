import { configureStore } from '@reduxjs/toolkit'
import  counterReducer  from '../features/counterReducer'

export const store = configureStore(
  {
    reducer: counterReducer
  }
)