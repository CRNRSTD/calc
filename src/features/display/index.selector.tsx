import { createSelector } from '@reduxjs/toolkit'
import { RootState } from '../../global/store/reducers'

const getDisplay = ({ display }: RootState) => display

export const getDisplayData = createSelector(
  getDisplay,
  ({ history, operator, currentValue, result }) => ({
    history, operator, currentValue, result
  })
)

export const getHistory = createSelector(
  getDisplay,
  ({ history }) => history
)

export const getExpression = createSelector(
  getDisplay,
  ({ expression }) => expression
)

export const getCurrentValue = createSelector(
  getDisplay,
  ({ currentValue }) => currentValue
)

export const getResult = createSelector(
  getDisplay,
  ({ result }) => result
)
