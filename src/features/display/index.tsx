import React from 'react'
import { useSelector } from 'react-redux'
import { getDisplayData } from './index.selector'
import DisplayComp from '../../components/display'

const Display = () => {
  const { currentValue, operator, history, result } = useSelector(
    getDisplayData
  )

  return (
    <DisplayComp
      expression={[...history, operator, currentValue].filter(Boolean)}
      result={result}
    />
  )
}

export default Display
