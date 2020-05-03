import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { batch } from 'react-redux'
import { getDisplayData } from './index.selector'
import { AppThunk } from '../../global/store'
import { calcResult } from '../../api/math'

interface State {
  history: string
  operator: string
  currentValue: string
  result: string
}

const initialState: State = {
  history: '',
  operator: '',
  currentValue: '',
  result: '',
}

const display = createSlice({
  name: 'display',
  initialState,
  reducers: {
    setHistory(state, { payload }: PayloadAction<string>) {
      state.history = payload
    },
    pushHistory(state, { payload }: PayloadAction<string>) {
      state.history = state.history + payload
    },
    clearHistory(state) {
      state.history = ''
    },
    setOperator(state, { payload }: PayloadAction<string>) {
      state.operator = payload
    },
    clearOperator(state) {
      state.operator = ''
    },
    setCurrentValue(state, { payload }: PayloadAction<string>) {
      state.currentValue = payload
    },
    pushCurrentValue(state, { payload }: PayloadAction<string>) {
      state.currentValue = state.currentValue + payload
    },
    clearCurrentValue(state) {
      state.currentValue = ''
    },
    setResult(state, { payload }: PayloadAction<string>) {
      state.result = payload
    },
    clearResult(state) {
      state.result = ''
    },
  },
})

export const {
  setHistory,
  pushHistory,
  clearHistory,
  setOperator,
  clearOperator,
  setCurrentValue,
  pushCurrentValue,
  clearCurrentValue,
  setResult,
  clearResult,
} = display.actions

export default display.reducer

export const clearAll = (): AppThunk => async dispatch => {
  batch(() => {
    dispatch(clearHistory())
    dispatch(clearOperator())
    dispatch(clearCurrentValue())
    dispatch(clearResult())
  })
}

export const updateCurrentValueWithNumber = (value: string): AppThunk => async (
  dispatch,
  getState
) => {
  const { currentValue, operator, result } = getDisplayData(getState())

  // Clean up on start of the calculations
  if (!!result) {
    batch(() => {
      dispatch(clearHistory())
      dispatch(clearResult())
    })
  }

  // Prevent 000000 alike
  if (value === '0' && currentValue === '0') return

  batch(() => {
    dispatch(pushHistory(operator))
    dispatch(clearOperator())
    dispatch(currentValue === '0' ? setCurrentValue(value) : pushCurrentValue(value))
  })
}

export const updateExpressionWithSymbol = (value: string): AppThunk => async (
  dispatch,
  getState
) => {
  const { currentValue, history, result } = getDisplayData(getState())

  // Do not start with symbol
  if (!!!currentValue && !!history && !!result) return

  if (!!result) {
    batch(() => {
      dispatch(clearHistory())
      dispatch(clearResult())
    })
  }

  batch(() => {
    dispatch(pushHistory(currentValue))
    dispatch(clearCurrentValue())
    dispatch(setOperator(value))
  })
}

export const updateCurrentValueWIthDot = (
  value: string = '.'
): AppThunk => async (dispatch, getState) => {
  const { currentValue } = getDisplayData(getState())

  // Prevent multiple dots
  if (currentValue === '' || currentValue.includes(value)) return

  dispatch(pushCurrentValue(value))
}

export const updateHistory = ({
  history,
  operator,
  currentValue,
}: {
  history: string
  operator: string
  currentValue: string
}): AppThunk => async (dispatch) => {
  batch(() => {
    dispatch(setHistory(history + operator + currentValue))
    dispatch(clearCurrentValue())
    dispatch(clearOperator())
  })
}

export const fetchResult = (expression: string): AppThunk => async (
  dispatch
) => {
  const {
    data: { result },
  } = await calcResult(expression)

  dispatch(setResult(result))
}
