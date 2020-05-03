import { configureStore, Action, CombinedState } from '@reduxjs/toolkit'
import { ThunkAction } from 'redux-thunk'
import reducer, { RootState } from './reducers'

export const store: CombinedState<any> = configureStore({
  reducer
})

export type AppDispatch = typeof store.dispatch
export type AppThunk = ThunkAction<void, RootState, unknown, Action<string>>
