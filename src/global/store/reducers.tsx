import { combineReducers, Reducer } from '@reduxjs/toolkit'
import display from '../../features/display/index.slice'

const reducer: Reducer = combineReducers({
  display
})

export type RootState = ReturnType<typeof reducer>

export default reducer
