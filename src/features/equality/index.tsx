import React, { FunctionComponent } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getDisplayData } from '../display/index.selector'
import { fetchResult, updateHistory } from '../display/index.slice'
import Button from '../../components/button'

const Equality: FunctionComponent = () => {
  const { currentValue, operator, history } = useSelector(getDisplayData)

  const dispatch = useDispatch()

  const onEqualClick = () => {
    dispatch(updateHistory({
      history,
      operator,
      currentValue
    }))
    dispatch(fetchResult(history + operator + currentValue))
  }

  return (
    <Button value='=' onClick={onEqualClick} />
  )
}

export default Equality
