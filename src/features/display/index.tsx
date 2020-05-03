import React from 'react'
import { useSelector } from 'react-redux'
import { getDisplayData } from './index.selector'

const Display = () => {
  const { currentValue, operator, history, result } = useSelector(
    getDisplayData
  )

  return (
    <>
      {history + operator + currentValue}
      <p>{result}</p>
    </>
  )
}

export default Display
