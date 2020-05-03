import React, { FunctionComponent } from 'react'
import { useDispatch } from 'react-redux'
import { updateExpressionWithInversedSymbol } from '../display/index.slice'
import Button from '../../components/button'

const Inverse: FunctionComponent = () => {
  const dispatch = useDispatch()

  const onInverseClick = () => {
    dispatch(updateExpressionWithInversedSymbol())
  }

  return (
    <Button value='+/-' onClick={onInverseClick} />
  )
}

export default Inverse
