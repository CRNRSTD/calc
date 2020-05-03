import React, { FunctionComponent } from 'react'
import { useDispatch } from 'react-redux'
import { updateExpressionWithSymbol } from '../display/index.slice'
import Button from '../../components/button'

interface NumberProps {
  value: string
  display?: string
}

const Number: FunctionComponent<NumberProps> = ({ value, display }) => {
  const dispatch = useDispatch()

  const onSymbolClick = () => {
    dispatch(updateExpressionWithSymbol(value))
  }

  return (
    <Button value={display || value} onClick={onSymbolClick} />
  )
}

export default Number
